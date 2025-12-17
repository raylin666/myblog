<?php

namespace Core\Config;

use Dotenv\Dotenv;

class Env
{
    /**
     * @var Dotenv $env
     */
    public static Dotenv $env;

    /**
     * 初始化 Dotenv .env 文件
     * @return void
     */
    public static function init(): void
    {
        self::$env = Dotenv::createUnsafeMutable(dirname(__DIR__) . '/../');
        self::$env->load();
    }
}