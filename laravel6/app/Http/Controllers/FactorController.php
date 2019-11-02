<?php

namespace App\Http\Controllers;

use Auth;
use Nexmo;
use Illuminate\Http\Request;

class FactorController extends Controller
{
    public function show() {
        return view('factor');
    }

    public function verify(Request $request) {
         $this->validate($request, [
             'code' => 'size:4'
         ]);

         $request_id = $request->session()->get('nexmo:request_id');
         $verification = new \Nexmo\Verify\Verification($request_id);

         Nexmo::verify()->check($verification, $request->code);

         Auth::loginUsingId($request->session()->pull('nexmo:user:id'), true);
         
         return redirect('/home');
    }
}
