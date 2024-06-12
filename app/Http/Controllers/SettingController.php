<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index() {
        $title = 'Setting';
        return view('pages.admin.setting', compact('title'));
    }
}
