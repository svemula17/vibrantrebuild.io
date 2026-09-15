/**
 * Writes out/.htaccess so the Apache config ships with the build instead of
 * living only on the server, unversioned.
 *
 * NOTE on caching: this host has neither mod_headers nor mod_expires enabled,
 * verified against the live site (assets come back "max-age=14400" rather than
 * the "public, immutable" set below, and no Expires header is sent). The blocks
 * are kept because they are correct and harmless, and will start working if the
 * modules are ever enabled. Until then the host's own 1-hour HTML cache applies,
 * so a deploy can take up to an hour to be visible without a hard reload.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";

const BODY = `Options -Indexes
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # Preserve the canonical form the old WordPress site used: https, no www.
  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://vibrantinc.com/$1 [R=301,L]

  RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
  RewriteRule ^(.*)$ https://vibrantinc.com/$1 [R=301,L]
</IfModule>

# Old WordPress is parked in /wp-old/. Block it outright: those files are PHP,
# and that install had a backdoor disclosure.
RedirectMatch 404 ^/wp-old/.*$

ErrorDocument 404 /404.html

<IfModule mod_expires.c>
  ExpiresActive On
  # Build assets are content-hashed, so a long life is safe.
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  # HTML is not hashed, so it must revalidate or a deploy stays invisible.
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff2|png|jpg|jpeg|svg|webp|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  # Apache 2.4 maps .js to text/javascript, not application/javascript, so the
  # old list compressed no JavaScript at all. Both are listed deliberately.
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript \
                                application/json application/xml text/xml image/svg+xml text/plain
</IfModule>
`;

const out = path.join(process.cwd(), "out", ".htaccess");
await writeFile(out, BODY, "utf8");
console.log("htaccess: wrote out/.htaccess");
