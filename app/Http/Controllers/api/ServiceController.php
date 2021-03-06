<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
  public function index(Request $request)
  {
    return ServiceResource::collection(Service::paginate($request->resultsPerPage ?? 10));
  }

  public function show(Service $service)
  {
    return new ServiceResource($service);
  }

  public function store(ServiceRequest $request)
  {
    $fileName = $this->storeImage($request->file('image'));

    return Service::create([
      'title'                   => (array) json_decode($request->title),
      'description'             => (array) json_decode($request->description),
      'other_advantage'         => (array) json_decode($request->other_advantage),
      'service_conditions'      => (array) json_decode($request->service_conditions),
      'service_id'              => $request->service_id,
      'image'                   => $fileName,
    ]);
  }

  public function update(ServiceRequest $request, Service $service)
  {
    $oldFileName = $service->image;

    if ($request->file('image')) $fileName = $this->updateImage($request->file('image'), $oldFileName);
    else $fileName = $oldFileName;

    $res = $service->update([
      'title'                   => (array) json_decode($request->title),
      'description'             => (array) json_decode($request->description),
      'other_advantage'         => (array) json_decode($request->other_advantage),
      'service_conditions'      => (array) json_decode($request->service_conditions),
      'service_id'              => $request->service_id,
      'image'                   => $fileName,
    ]);

    return $res ? ['message' => "Service data updated"] : ['error' => true];
  }

  public function activeToggle(Request $request, Service $service)
  {
    $res = $service->update($request->only(['is_active']));

    return $res ? ['message' => "active toggle updated"] : ['error' => true];
  }
}
