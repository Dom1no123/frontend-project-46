### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dom1no123/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dom1no123/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d550a962a10f6f9c453c/maintainability)](https://codeclimate.com/github/Dom1no123/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d550a962a10f6f9c453c/test_coverage)](https://codeclimate.com/github/Dom1no123/frontend-project-46/test_coverage)
[![Node.js CI](https://github.com/<username>/<repository>/actions/workflows/node.js.yml/badge.svg)](https://github.com/Dom1no123/frontend-project-46/.github/workflows/node.js.yml)
## Вычислитель отличий (`gendiff`)

### Описание

Утилита `gendiff` позволяет сравнивать два файла (например, JSON или YAML) и показывает их различия в удобном формате.

### Установка

1. Убедитесь, что у вас установлен Node.js.
2. Склонируйте репозиторий и установите зависимости:
   ```bash
   git clone <репозиторий>
   cd <папка_проекта>
   npm install
Сделайте скрипт исполняемым:
bash
Копировать код
chmod +x gendiff.js
Пример использования
Пример работы утилиты записан в асцинеме. Посмотрите демонстрацию:


Команды
Сравнение двух файлов:

bash
Копировать код
gendiff file1.json file2.json
Вывод:

yaml
Копировать код
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}

[![asciinema](https://asciinema.org/a/58GMJAI1NVEqdfZSW0UrhPLgZ.svg)](https://asciinema.org/a/58GMJAI1NVEqdfZSW0UrhPLgZ)

Просмотр справки:

bash
Копировать код
gendiff -h
Вывод:

lua
Копировать код
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1      path to the first file
  filepath2      path to the second file

Options:
  -V, --version  output the version number
  -h, --help     display help for command