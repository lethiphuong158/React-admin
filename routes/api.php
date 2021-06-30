<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return response()->json([
            'user' => $request->user(),
            'token' => $request->user()->tokens(),
        ]);
    });
    Route::post("/logout",[AuthController::class, 'logout']);
});

Route::post("/login",[AuthController::class, 'login']);
Route::post("/register",[AuthController::class, 'register']);

