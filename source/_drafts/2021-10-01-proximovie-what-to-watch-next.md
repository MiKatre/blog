---
layout: post
title: What movie to watch next
subtitle: Proximovie.com — An experiment with neural networks and embeddings.
date: 2021-10-01 10:45:13 -0400
background: '/img/posts/06.jpg'
categories:
  - Ressources
tags:
  - Free Things
---

Most of us enjoy watching movies and with the abundnace of choice, the only problem will be which.

This is my attempt to add a little stone to the existing inventory of websites that help you find what to watch.

## How do we traditionally recommend

In the world of recommendations, there are certain heuristics that we would be unwise to ignore.

The first rule is that if I know nothing about you, I will show you the most popular items. A best seller list is the most powerful tool at the disposal of a new website owner that knows little about his users.

The next rule is that if you interacted with something in the past, I will show it to you. People are likely to interact with items they interacted with in the past. This is probably why websites such [imdb.com](https://www.imdb.com) or [amazon.com](https://www.amazon.com) show you history.

Then we can level up from these heuristics and use the simplest machine learning methods such as [item to item collaborative filtering](https://ieeexplore.ieee.org/document/1167344). Now we can show our users items related to items they interacted with.

This is not state of the art, but it scales very well, is inexpensive to train and serve, and performs very well.

Only when we exhausted simple method should we think about more complex solutions such as Deep Learning.

## How proximovie recommends

Proximovie is a simple experiment with neural net embeddings.

The aim of the experiment is to see is clustering movies by new measures such as poster or synopsis similarity would make decent recommendations.

After all, it would make sense that posters of similar movies would cluster together since they target the same audience.


## Get movie recommendations by poster similarity

I was surprised that by the quality of poster recommendation. Having never though about it, I didn’t imagine that there was so much information in it.

Posters of movies that target the same audience cluster together:

Turns out there is a lot of information in the posters: year of production, main cast, genre, target audience, even the budget might affect what the poster look like.

But it makes sense because if you go to the cinema with no agenda and you only have posters, just by eyeballing them you must be able to tell if it is a cartoon you can watch with your kids, a dark horror movie, an old 1945 war movie, a modern million dollars super hero production or a romantic movie for girls.

## Finding movies with similar plots

Understanding a plot is a difficult problem for a computer. Let alone understand it well enough to tell you which other movie is also about a dog that tries to get back to his family after being stolen by an evil witch.

Now with neural networks it is becoming possible. There are huge language models like BERT that are trained on predicting the next word in a sequence. To do that well, it must learn something about meaning and context.

It turns out you can take part of trained neural network and using it only to encode a sentence, or a movie plot. And you get a vector of numbers. Those are supposed to capture meaning and other things. And if you do that for all the movies, you get a bunch of vectors that you can compare using your favourite similarity metric. It works because those vectors are not just fixed representations of words, like a one hot encoded vector would be, they are part of the ‘neurons’ that are trained. That means the numbers in them mean something. And it also means that sentences with similar meaning will have similar vectors.

So that is what I did, I encoded all the movie synopsis using a pre trained BERT model to get movies with similar plots.

And here are the movies similar in terms of plot, to Harry Potter I:

I was surprised to find Peter Pan there, but it is actually pretty good.

## The most similar movies in terms of metadata

The first block of recommendations that show up are “classic” item-item recommendations. The vectors are encoded manually, they contain information about the people involved in making the movie, the genres, production companies, etc.

Recommendations of similar items are really just about somehow representing a movie in terms of a vector and comparing vectors between them with a distance metric.

Encoding it manually simply means that you decide what each ‘column’ in a vector will stand for. If you have ten genres and a thousand actors, each movie will be represented by vectors of length one thousand and ten. Say you have a movie with only one actor. You will have a one in the column representing this guy and a zeros everywhere else. If you encounter the term sparse vector, this is what it means. And sparse matrix is the same if you encode more than one movie.

All the differences come from how the vector is constructed. You can either represent a movie in terms of what data you know about them and you get item-item recommendations. A variation that is used on Amazon.com since 2003 (and is still on the site) is to encode the item vectors in terms of who bought them. No metadata there, two items will be similar if there are bought by the same users.

There is another thing that people do, it is switching paradigms and instead of comparing movie vectors, they compare user vectors. If two users have each watched fifteen movies and they have ten in common, you recommend the five that don’t match to each other, assuming that being so similar, they will likely like what the other liked. They just haven’t found it yet.

The last more modern way I know, is to let the computer construct the vector that represents the movie. It is exactly what I did with posters and plots. That can also be done by training a neural net in some task and taking the resulting embeddings, which are basically encoded or “learned” representations of the movie. What is in there depend on the task you trained on.

## What’s next

This project wasn’t supposed to be more than a small exploration of making recommendations from posters and synopsis using various kinds of neural nets. But since I liked the result I made a small static website out if.

It has also decent SEO so if it pops up in search engine result pages and people start coming in, I guess I could add Amazon style “Those who watched X also watched” which really makes for the best recommendations. But adding that has ‘tentacles’ because I don’ t have the data of who watched what when. Services like Netflix have it and it do very good recommendations, but only inside inside they own, limited repertoire.

[Go to the website](https://proximovie.com)
