@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <h2 class="card-header">{{ __('Posts') }}</h2>
        <div class="card-body">
            @if($trash)
                <trash-post posts='@json($posts)' ></trash-post>
            @else
                <view-post posts='@json($posts)'></view-post>
            @endif
        </div>
    </div>
</div>
@endsection