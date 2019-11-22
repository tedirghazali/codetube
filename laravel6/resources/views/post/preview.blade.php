@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <h2 class="mb-1">{{ __('Preview Post') }}</h2>
            </div>
            <div class="float-right">
                <a class="btn btn-primary" href="{{ route('posts.index') }}">{{ __('Back') }}</a>
            </div>
        </div>
        <div class="card-body">
            <h1>{{ $post->title }}</h1>
            <p>
                <img src="{{ $post->thumbnail }}" width="200" class="float-left pr-2 pb-2">
                {{ $post->content }}
                <br/>
                <span><b>{{ __('Category:') }}</b> {{ $post->category }}, </span>
                <span><b>{{ __('Tags:') }}</b> {{ $post->tags }}, </span>
                <span><b>{{ __('Author:') }}</b> {{ $author->name }}</span>
            </p>
        </div>
    </div>
</div>
@endsection