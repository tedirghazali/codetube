<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->unique()->sentence,
        'content' => $faker->paragraphs(5, true),
        'category' => $faker->word,
        'tags' => $faker->words(5, true),
        'slug' => $faker->sentence,
        'thumbnail' => $faker->imageUrl(640, 490, 'cats'),
        'author' => factory(App\User::class),
        'status' => $faker->randomElement(array('Draft', 'Publish', 'Private')),
    ];
});
