---
title: 'Our Network'
description: 'Lorem ipsum dolor sit amet.'
layout: page
layout_data:
  animation: false
---

<img alt="" src="https://statically.io/static/images/features/statically_net.png" style="width:100%;height:auto;">

Statically is dedicated to running on multiple servers like {% include every.html k='data_centers' %}. It comes with a modern platform that is compatible with HTTP/2.0 and HTTPS. We will use _Brotli_ if your browser accepts it and we will send your request through the nearest data center.

We have 10 data centers located in strategic locations + {{ site.data_centers.size }} CDN providers that help with the performance of our platform.

_TODO_

Statistics Usage
----------------

Wondering about Statically stats? Visit [our statistics page](https://statically.io/stats)

Supported Providers
-------------------

Statically can serves **raw files** with proper Content-Type headers and make it more fast for you from these providers:

**GitHub \| GitLab \| Bitbucket \| WordPress SVN**

You may interested in our other features, please [learn more here](https://statically.io/about).

## Cache Behavior

There are two versions of Statically: **Production and Development**. Below you will learn how to use Statically as a Production CDN and Development CDN.

*   **Production CDN**

    By default, Statically Raw Files CDN cache are set to **1 year** via `Cache-Control` header for every files except on the **master** branch, we set cache for **master** branch **for 24 hours** so new changes you push to GitHub will be reflected within this time.

    But if you want to use Statically as a **Development CDN** you can add query string `?env=dev` to tell CDN to not cache your files, you can learn more at Development CDN section below.

    The CDN caches files based on their permanent URL.

    Example:

    * GitHub [https://cdn.statically.io/gh/jquery/jquery-dist/master/dist/jquery.min.js](https://cdn.statically.io/gh/jquery/jquery-dist/master/dist/jquery.min.js)
    * Imgpx [https://cdn.statically.io/img/i.imgur.com/9usQKZg.jpg](https://cdn.statically.io/img/i.imgur.com/9usQKZg.jpg)

*   **Development CDN** `?env=dev`

    You can use Statically as a Development CDN, it means Statically CDN will not cache files, new changes you push to GitHub will be reflected within minutes. Development CDN will works when you set up `?env=dev` query string on the URL.

    Example:

    * [https://cdn.statically.io/gh/jquery/jquery-dist/master/dist/jquery.min.js?env=dev](https://cdn.statically.io/gh/jquery/jquery-dist/master/dist/jquery.min.js?env=dev)

## Uptime

We keep users away from all downtime, we apply failover to each of our systems, for more information about Network Status, please check it in our [status page](https://status.marsble.com).