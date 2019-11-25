<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Post::orderBy('created_at', 'desc')->with('user:id,name')->get();
        return view('post.index', ['posts'=>$models, 'trash'=> false]);
    }

    public function trash()
    {
        $models = Post::onlyTrashed()->orderBy('deleted_at', 'asc')->with('user:id,name')->get();
        return view('post.index', ['posts'=>$models, 'trash'=> true]);
    }

    public function restore($id)
    {
        Post::withTrashed()->where('id', $id)->restore();
        return redirect(route('posts.trash'));
    }

    public function remove(Request $request)
    {
        Post::onlyTrashed()->where('id', $request->get('id'))->forceDelete();
        return redirect(route('posts.trash'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('post.form', ['author'=>Auth::id()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => 'required|unique:posts|max:255',
            'content' => 'required',
            'category' => 'required',
            'tags' => 'required',
            'slug' => 'required',
            'thumbnail' => 'required',
            'author' => 'required',
            'status' => 'required',
        ])->validate();

        $model = Post::create($request->all());
        if($model){
            return redirect('posts');
        } else{
            return redirect('posts/create')->with('error', 'Error! Request data is not insert to database, please try again.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $model = Post::find($post->id);
        $author = \App\User::where('id', $post->author)->first();
        return view('post.preview', ['post'=>$model, 'author'=>$author]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $model = Post::find($post->id);
        return view('post.form', ['post'=>$model, 'author'=>Auth::id()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        Validator::make($request->all(), [
            'title' => 'required|max:255',
            'content' => 'required',
            'category' => 'required',
            'tags' => 'required',
            'slug' => 'required',
            'thumbnail' => 'required',
            'author' => 'required',
            'status' => 'required',
        ])->validate();

        $model = Post::where('id', $post->id)->update($request->except(['_token', '_method']));
        if($model){
            return redirect('posts');
        } else{
            return redirect('posts/'.$post->id.'/edit')->with('error', 'Error! Failed to update request data');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        Post::destroy($post->id);
        return redirect('posts');
    }
}
