<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');

Route::resource('posts', 'PostController');

Route::get('/recycle-posts', 'PostController@trash')->name('posts.trash');
Route::get('/recycle-posts/{id}', 'PostController@restore')->name('posts.restore');
Route::post('/recycle-posts', 'PostController@remove')->name('posts.remove');

Route::get('/assign-posts/{url}', 'PostController@assign');

Route::get('/nexmo', 'NexmoController@show')->name('nexmo');
Route::post('/nexmo', 'NexmoController@verify')->name('nexmo');

Route::get('/factor', 'FactorController@show')->name('factor');
Route::post('/factor', 'FactorController@verify')->name('factor');
