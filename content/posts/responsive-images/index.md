+++
title = "Responsive images"
date = 2023-01-12
[taxonomies]
tags= ["Zola", "Theme", "gallery"]
[extra]
images= ["1.png"]
+++


{{ image(src="1.png", alt="Example image") }}

You can include responsive images using the image shortcode like so:

```md
\{\{ image(src="yourimage.jpg", alt="This is my image") }}
```
