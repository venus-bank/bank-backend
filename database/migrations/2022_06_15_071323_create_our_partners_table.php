<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('our_partners', function (Blueprint $table) {
      $table->id();
      $table->json('title');
      $table->json('description')->nullable();
      $table->text('bank_messaging_country')->nullable();
      $table->string('image');

      $table->boolean('is_active')->default(1);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('our_partners');
  }
};
