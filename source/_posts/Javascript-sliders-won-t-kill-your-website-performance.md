---
title: Javascript sliders won't completely kill your website performance
tags:
---

I need a Carousel on a website I am building. 

I used css only solutions in other projects but it doesn't meet the requirements for this one. Will a JS Carousel really kill performances?


## Benchmark: Nothig vs SlickJS vs  Flickity vs GlideJS

|  | Nothing | Flickity | GlideJS | SlickJS |
| --- | --- | --- | --- | --- |
| PagesPeed Insights (Mobile)  | 99 | 98 | 96 | 94 |
| GTmetrix Grade | A | A | A | A |
| GTmetrix Grade Performance score | 100% | 100% | 100% | 100% |
| GTmetrix Largest Contentful Paint | 160ms | 155ms | 224ms | 162ms |
| PagesPeed (Slow 4g throttled) - First Contentful Paint | 0.8s | 1.9s | 1.6s | 1.7s |
| PagesPeed (Slow 4g throttled) - Largest Contentful Paint | 2.2s | 1.9s | 2.6s | 2.9s |


**Notes**:
- This is a naïve, rudimentary comparison but it gives an intuition about how much will a carousel DeStroY YoUr WeBsitE PerForManceSS.
- No optimizations were made.
- The default most minimal carousel settings were used for each library.