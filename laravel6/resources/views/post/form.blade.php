@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <h2 class="mb-1">{{ __('New Post') }}</h2>
            </div>
            <div class="float-right">
                <a class="btn btn-primary" href="{{ route('posts.index') }}">{{ __('Back') }}</a>
            </div>
        </div>
        <div class="card-body">
            @if ($error ?? '')
            <div class="alert alert-danger">
                <strong>{{ $error }}</strong>
            </div>
            @endif
            <form method="POST">
                @csrf
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="title">{{ __('Title') }}</label>
                            <input id="title" name="title" type="text" class="form-control @error('title') is-invalid @enderror" value="@if($post ?? '') {{ $post->title }} @endif">
                            @error('title')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="slug">{{ __('Slug') }}</label>
                            <input id="slug" name="slug" type="text" class="form-control @error('slug') is-invalid @enderror" value="@if($post ?? '') {{ $post->slug }} @endif">
                            @error('slug')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">{{ __('Content') }}</label>
                            <textarea id="content" name="content" rows="6" class="form-control @error('content') is-invalid @enderror">@if($post ?? '') {{ $post->content }} @endif</textarea>
                            @error('content')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="category">{{ __('Category') }}</label>
                            <input id="category" name="category" type="text" class="form-control @error('category') is-invalid @enderror" value="@if($post ?? '') {{ $post->category }} @endif">
                            @error('category')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="tags">{{ __('Tags') }}</label>
                            <input id="tags" name="tags" type="text" class="form-control @error('tags') is-invalid @enderror" value="@if($post ?? '') {{ $post->tags }} @endif">
                            @error('tags')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="thumbnail">{{ __('Thumbnail') }}</label>
                            <input id="thumbnail" name="thumbnail" type="text" class="form-control @error('thumbnail') is-invalid @enderror" value="@if($post ?? '') {{ $post->thumbnail }} @endif">
                            @error('thumbnail')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="status">{{ __('Status') }}</label>
                            <select id="status" name="status" class="form-control @error('status') is-invalid @enderror">
                                <option>@if($post ?? '') {{ $post->status }} @endif</option>
                                <option>Draft</option>
                                <option>Publish</option>
                                <option>Private</option>
                            </select>
                            @error('status')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="author" value="{{ $author }}">
                            @if ($post ?? '')
                            @method('PUT')
                            <button class="btn btn-warning" formaction="{{ route('posts.update', $post) }}" type="submit">{{ __('Update') }}</button>
                            @else
                            <button class="btn btn-primary" formaction="{{ route('posts.store') }}" type="submit">{{ __('Submit') }}</button>
                            @endif
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection