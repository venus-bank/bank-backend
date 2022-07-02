<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServicePointRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, mixed>
   */
  public function rules()
  {
    return [
      'name'            => ['required'],
      'address'         => ['required'],
      'addressDetails'  => ['required'],
      'working_hours'   => ['required'],
      'phone'           => ['required'],
      'second_phone'    => ['required'],
    ];
  }
}
