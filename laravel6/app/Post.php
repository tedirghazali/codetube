<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title', 'content', 'category', 'tags', 'slug', 'thumbnail', 'author', 'status'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'author')->withDefault([
            'name' => 'Tedir Ghazali'
        ]);
    }
}
