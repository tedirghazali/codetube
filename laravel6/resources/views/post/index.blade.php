@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h2 class="mb-1">{{ __('Posts') }}</h2>
                    </div>
                    <div class="float-right">
                        <a class="btn btn-primary" href="{{ route('posts.create') }}">{{ __('Add New') }}</a>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>{{ __('No') }}</th>
                                <th>{{ __('Title') }}</th>
                                <th>{{ __('Category') }}</th>
                                <th>{{ __('Tags') }}</th>
                                <th>{{ __('Author') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th width="180">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php $no = 1 @endphp

                            @foreach($posts as $post)
                            <tr>
                                <td>{{ $no++ }}</td>
                                <td>{{ $post->title }}</td>
                                <td>{{ $post->category }}</td>
                                <td>{{ $post->tags }}</td>
                                <td>{{ $post->author }}</td>
                                <td>{{ $post->status }}</td>
                                <td>
                                    <a class="btn btn-info btn-sm" href="{{ route('posts.show', $post) }}">{{ __('View') }}</a>
                                    <a class="btn btn-warning btn-sm" href="{{ route('posts.edit', $post) }}">{{ __('Edit') }}</a>
                                    <form action="{{ route('posts.destroy', $post) }}" method="POST" class="d-inline">
                                        @csrf 
                                        @method('DELETE')
                                        <button class="btn btn-danger btn-sm" type="submit">{{ __('Delete') }}</a>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection