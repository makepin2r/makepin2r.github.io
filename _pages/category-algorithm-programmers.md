---
layout: archive
permalink: /tips
title: "꿀팁"

author_profile: true
sidebar:
    nav: "docs"
---

{% assign posts = site.categories.tips %}
{% for post in posts %}
{% include archive-single.html type=page.entries_layout %}
{% endfor %}
