<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

//    public function login(Request $request)
//    {
//        $fields = [
//            "email",
//            "password",
//        ];
//        // Chỉ lấy những dữ liệu client gửi lên có trong array $fields
//        $data = $request->only($fields);
//
//        // Kiểm tra thông tin và đăng nhập
//        if (!Auth::attempt($data)) {
//
//            // Nếu sai thông tin đăng nhập thì thông báo lỗi và gửi 1 mã lỗi HTTP_UNAUTHORIZED (401)
//            return response()->json("Sai thong tin tai khoan", Response::HTTP_UNAUTHORIZED);
//        }
//
//        // Đăng nhập thành công => tạo token để trả về cho client xác thực request.
//        $token = $request->user()->createToken("jwt");
//
//        return response()->json($token->plainTextToken);
//    }
//
//    public function register(Request $request)
//    {
//        $rules = [
//            "email" => "required|email|unique:users",
//            "password" => "required|confirmed",
//        ];
//        // Tạo 1 validator để kiểm tra dữ liệu user gửi lên đăng ký, dựa trên những rules tại mảng $rules
//        $validator = validator($request->all(), $rules);
//
//        // Nếu có lỗi dữ liệu sai với rules đã định nghĩa thì trả về toàn bộ lỗi validate, kèm theo mã lỗi HTTP_UNPROCESSABLE_ENTITY
//        if ($validator->fails()) {
//            return \response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
//        }
//
//        // Lấy những dữ liệu đã được validate
//        $data = $validator->validated();
//
//        // Tạo user dựa trên dữ liệu trên
//        User::create($data);
//
//        // Trả về client là thành công và kèm mã success là HTTP_CREATED
//        return \response()->json(true, Response::HTTP_CREATED);
//    }
    public function login (Request $request) {
        $fields = [
          "email",
          "password"
        ];

        $credentials = $request->only($fields);

        if(Auth::attempt($credentials)) {
            $token = $request->user()->createToken("userToken");
            return response()->json($token->plainTextToken);
        }
        return response()->json("Thong tin dang nhap khong chinh xac", Response::HTTP_UNAUTHORIZED);
    }

    public function register (Request $request) {
        $rules = [
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed",
            "password_confirmation" => "nullable"
        ];

        $validator = validator($request->all(), $rules);

        if($validator->fails()) {
            return \response()->json($validator->errors(),Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $data = $validator->validated();
        $data['password'] = Hash::make($data['password']);
        User::create($data);

        return \response()->json(true,Response::HTTP_CREATED);
    }






















}
