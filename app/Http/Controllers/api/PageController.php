<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest;
use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
  public function index()
  {
    return PageResource::collection(Page::all());
  }

  public function show($table_key)
  {
    return new PageResource(Page::where('table_key', $table_key)->first());
  }

  public function store(PageRequest $request)
  {
    return Page::create(
      $request->only(['table_key', 'title', 'sub_title', 'description'])
      );
  }

  public function update(PageRequest $request, $table_key)
  {
    $res = Page::where('table_key', $table_key)->update($request->only(['title', 'sub_title', 'description']));

    return $res ? ['message' => "Page data updated"] : ['error' => true];
  }

  public function activeToggle(Request $request, $table_key)
  {
    $res = Page::where('table_key', $table_key)->update(['is_active' => $request->is_active]);

    return $res ? ['message' => "active toggle updated"] : ['error' => true];
  }
}
