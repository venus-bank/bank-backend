<?php

namespace App\Http\Resources;

use App\Http\Resources\Helpers\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class WebsiteInfoResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    return [
      'id'              => $this->id,
      "is_active"       => $this->is_active,
      'created_at'      => $this->created_at,
      'updated_at'      => $this->updated_at,

      "table_key"       => $this->table_key,
      "table_value"     => $this->getTranslations('table_value'),
    ];
  }
}
