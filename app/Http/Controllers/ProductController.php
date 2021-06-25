<?php

namespace App\Http\Controllers;

use App\Models\MyCart;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  public function index()
  {
    $products = Product::all();
    return response()->json($products);
  }

  public function addToCart(Request $request)
  {
    $existItems = MyCart::where('user_id', 1)->get();
    if ($existItems->count() == 0) {
      MyCart::create([
        'product_id' => $request->data,
        'user_id' => 1,
      ]);
      return response('db save from first hit');
    } else {
      foreach ($existItems as $existItem) {
       if($existItem->product_id != json_decode($request->data)){
        //  laradump()->dump(json_decode($existItem->product_id));
        MyCart::create([
          'product_id' => $request->data,
          'user_id' => 1,
        ]);
        return response('db save from second hit');
       }else{
         return response(['error' => 'product exist!']);
       }
      }
    }
  }
}
