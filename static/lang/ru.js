export function language() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Дублировать',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Удалить комментарий',
        BLOCKLY_MSG_ADD_COMMENT: 'Добавить комментарий',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Внешний ввод',
        BLOCKLY_MSG_INLINE_INPUTS: 'Прямой ввод',
        BLOCKLY_MSG_DELETE_BLOCK: 'Удалить блок',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Удалить %1 бл.',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Свернуть блок',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Развернуть блок',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Отключить блок',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Включить блок',
        BLOCKLY_MSG_HELP: 'Помощь',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Свернуть все блоки',
        BLOCKLY_MSG_EXPAND_ALL: 'Развернуть все блоки',
        LANG_VARIABLES_SET_ITEM: 'элемент',
        LANG_RESERVED_WORDS: 'Зарезервированное слово: Это имя не допускается.',
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Логические',
        LANG_LOGIC_OPERATION_AND: 'и',
        LANG_LOGIC_OPERATION_OR: 'или',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Сравнение двух аргументов на равенство.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Сравнение двух аргументов на неравенство',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Сравнение двух аргументов: первый меньше второго?',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Сравнение двух аргументов: первый меньше второго, или равен ему?',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Сравнение двух аргументов: первый больше второго?',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Сравнение двух аргументов: первый больше второго, или равен ему?',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Сравнение двух аргументов на логическую функцию И.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Сравнение двух аргументов на логическую функцию ИЛИ.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'НЕ',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Возвращает обратное значение логического аргумента.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'ИСТРИНА',
        LANG_LOGIC_BOOLEAN_FALSE: 'ЛОЖЬ',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Возвращает логическое ИСТИНА или ЛОЖЬ в зависимости от выбора.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Коммуникации',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: приемник ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Возвращает данные, полученные с помощью модуля Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Отправить',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Передать данные',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Входные данные передаются с помощью модуля Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Скорость передачи',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Имя',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Кодовый PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Прием',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Передача',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Определяет подключение к модулю Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Модуль доступен',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли модуль Bluetooth.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Последовательный порт доступен',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли последовательный порт',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Отправляет данные в последовательный порт',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Отправляет данные в последовательный порт одной строкой',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII, заканчивая посылку кодом перевода строки.',
        LANG_ADVANCED_SERIAL_READ: 'Читать последовательный порт',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Прочитать данные, полученные через последовательный порт, как байт.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Читать строку символов из последовательного порта',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Прочитать данные, полученные через последовательный порт в виде текста ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Специальные символы ',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Табулятор',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Возврат каретки',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Линия',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Написать специальные символы.',
        // bq блоки:
        LANG_CATEGORY_BQ: 'Блоки Octopus',
        LANG_BQ_BAT: 'BAT - ультразвуковой датчик',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN #',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN #',
        LANG_BQ_BAT_TOOLTIP: 'Возвращает расстояние, измеренное датчиком.',
        LANG_BQ_BUTTON: 'Кнопка',
        LANG_BQ_BUTTON_PIN: 'PIN# ',
        LANG_BQ_BUTTON_TOOLTIP: 'Кнопка',
        LANG_BQ_BUTTONS: 'Кнопка',
        LANG_BQ_BUTTONS_PIN: 'PIN# ',
        LANG_BQ_BUTTONS_BUTTON_A: '#A Кнопка',
        LANG_BQ_BUTTONS_BUTTON_B: '#B Кнопка',
        LANG_BQ_BUTTONS_BUTTON_C: '#C Кнопка',
        LANG_BQ_BUTTONS_BUTTON_D: '#D Кнопка',
        LANG_BQ_BUTTONS_BUTTON_E: '#E Кнопка',
        LANG_BQ_BUTTONS_TOOLTIP: 'Кнопка на базе аналогового порта',
        LANG_BQ_INFRARED: 'Инфракрасный датчик',
        LANG_BQ_INFRARED_PIN: 'PIN# ',
        LANG_BQ_INFRARED_TOOLTIP: 'Возвращает цифровое значение, измеренное ИК-датчиком ',
        LANG_BQ_JOYSTICK: 'Джойстик',
        LANG_BQ_JOYSTICK_PIN_X: 'X ось PIN# ',
        LANG_BQ_JOYSTICK_PIN_Y: 'У ось PIN# ',
        LANG_BQ_JOYSTICK_POSITION: 'Позиция джойстика',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'PIN# кнопки',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Джойстик',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN# ',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'Включить',
        LANG_BQ_LED_OFF: 'Выключить',
        LANG_BQ_LED_TOOLTIP: 'Светодиод',
        LANG_BQ_PHOTORESISTOR: 'Датчик света',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN# ',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Возвращает аналоговое значение, измеренное на фоторезисторе.',
        LANG_BQ_PIEZO_BUZZER: 'Звукоизлучатель',
        LANG_BQ_PIEZO_BUZZER_PIN: 'PIN # ',
        LANG_BQ_PIEZO_BUZZER_TONE: 'Тон',
        LANG_BQ_PIEZO_BUZZER_DO: 'ДО',
        LANG_BQ_PIEZO_BUZZER_RE: 'РЕ',
        LANG_BQ_PIEZO_BUZZER_MI: 'МИ',
        LANG_BQ_PIEZO_BUZZER_FA: 'ФА',
        LANG_BQ_PIEZO_BUZZER_SOL: 'СОЛЬ',
        LANG_BQ_PIEZO_BUZZER_LA: 'ЛЯ',
        LANG_BQ_PIEZO_BUZZER_SI: 'СИ',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Продолжительность',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Звукоизлучатель - пьезоэлектрический элемент. Излучает звук фиксированной тональности.',
        LANG_BQ_PIEZO_BUZZERAV: 'Расширенный звукоизлучатель',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN# ',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'Тон',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Продолжительность',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Звукоизлучатель - пьезоэлектрический элемент. Излучает звук заданной тональности.',
        LANG_BQ_POTENTIOMETER: 'Потенциометр',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN# ',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Возвращает аналоговое значение, измеренное с помощью потенциометра ',
        // ЖК блоки:
        LANG_CATEGORY_LCD: 'Блоки ЖК',
        LANG_LCD_DEF: 'ЖК-дисплей (2x16) ',
        LANG_LCD_PINS: 'LCD Pins',
        LANG_LCD_DEF_TOOLTIP: 'Установка ЖК',
        LANG_LCD_ADVANCED_DEF: 'расширенный ЖК ',
        LANG_LCD_ADVANCED_ROWS: 'Линии',
        LANG_LCD_ADVANCED_COLUMNS: 'Колонки',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'блок, который определяет настройки ЖК',
        LANG_LCD_SETBACKLIGHT: 'ЖК: настроить подсветку',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Настройка подсветки ЖК-дисплея',
        LANG_LCD_PRINT: 'ЖК: Печать',
        LANG_LCD_PRINT_POSITION: 'Установите позицию текста?',
        LANG_LCD_PRINT_TOOLTIP: 'Печать фразы на ЖК-дисплее в указанной позиции или на следующей доступной.',
        LANG_LCD_CLEAR: 'ЖК очистить',
        LANG_LCD_CLEAR_TOOLTIP: 'ЖК: Удалить символы с экрана',
        // Управление блоками:
        LANG_CATEGORY_CONTROLS: 'Контроль',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Ждать (мс)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Время ожидания указано в миллисекундах (мс) ',
        LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
        LANG_CONTROLS_EXECUTE: 'Execute',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Если условие истинно, выполняет действия в блоке.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Если условие истинно, выполняет команду первого блока, в противном случае выполняет вторую команду блока.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Если первое значение ИСТИНА, выполняет команду первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Если первое значение ИСТИНА, выполняет команды первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок. Если какое-нибудь из следующих условий является ИСТИНА, выполняет последнюю команду блока.',
        LANG_CONTROLS_IF_MSG_IF: 'если',
        LANG_CONTROLS_IF_MSG_ELSEIF: ', иначе если',
        LANG_CONTROLS_IF_MSG_ELSE: 'иначе',
        LANG_CONTROLS_IF_MSG_THEN: 'Выполнить',
        LANG_CONTROLS_IF_IF_Field_IF: 'если',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Добавить, удалить, изменить или перенастроить разделы этого блока ЕСЛИ. ',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: ', иначе если',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Добавляет состояние к блоку ЕСЛИ',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'иначе',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Добавляет окончательное состояние блока, если соответствует  остальная часть параметров',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Вы не можете установить переменную в качестве начального значения блока.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Вы не можете установить переменную в начальное значение блока.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'Введите значение ',
        LANG_CONTROLS_FOR_INPUT_VAR: 'х',
        LANG_CONTROLS_FOR_INPUT_FROM: 'от',
        LANG_CONTROLS_FOR_INPUT_TO: 'до ',
        LANG_CONTROLS_FOR_INPUT_DO: 'Выполнить',
        LANG_CONTROLS_FOR_TOOLTIP: 'Считая от начала до конца. Каждый раз, когда вы увеличить значение, переменная получает это значение и действия выполняются.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'пока',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'до',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'В то время как состояние истинно, выполнить инструкции ',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'В то время как условие ложно, выполните инструкции',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Повторить',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'раз',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'Выполнить',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'выполнить инструкции несколько раз.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: ' "петля" ',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'остановить',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'Переход к следующему значению в "петли" ',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Выйдите из "петли" в этом действии.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Пропустите оставшуюся часть действий этого круга, и продолжить со следующего круга.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Внимание: Этот блок может быть использован только в пределах "петли".',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'если',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'выполняет действия, если это так.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Этот блок сравнивает значения по одному для выбора варианта действия.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'Выполнить',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'Блок "по умолчанию" определяет действие, которое будет работать, если не встретил соответствий в предыдущих случаях.',
        LANG_CONTROLS_SWITCH_IS: 'это',
        LANG_CONTROLS_SWITCH_CASE: 'выполнить',
        LANG_CONTROLS_SWITCH_COLON: ':',
        LANG_CONTROLS_SWITCH_DEFAULT: 'либо выполнить',
        LANG_CONTROLS_SWITCH_DO: 'Выполнить',
        // Математические блоки:
        LANG_CATEGORY_MATH: 'Математика',
        LANG_MATH_ADVANCED_MAP_MAP: 'Массив',
        LANG_MATH_ADVANCED_MAP_FROM: 'От [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'до [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Ввод начальных значений для массива чисел.',
        LANG_MATH_NUMBER_TOOLTIP: 'Целое',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Вектор из трех значений',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Возвращает значение элемента вектора.',
        LANG_MATH_MODULO_TOOLTIP: 'Возвращает остаток от деления между значениями параметров.',
        LANG_MATH_BASE_MAP: 'Массив',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Значение между [0- ',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Входные значения массива в диапазоне [0-1023] для другого диапазона значений.',
        LANG_MATH_SINGLE_OP_ROOT: 'квадратный корень ',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'абсолютное значение',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Возвращает квадратный корень из числа.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'возвращает абсолютное значение числа.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Возвращает число с обратным знаком.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Возвращает натуральный логарифм числа. ',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'возвращает десятичный логарифм числа.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'возвращает экспоненту числа.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Возвращает 10 в степени ',
        // Текстовых блоков:
        LANG_CATEGORY_TEXT: 'Текст',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Письмо, одно слово или строка текста.',
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'создать текст',
        LANG_TEXT_JOIN_TOOLTIP: 'Создает текст, соединяющую любое количество элементов.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'объединить',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Добавить, удалить, изменить или разделы для перенастройки этого текстовый блок.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'элемент',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Добавить элемент в тексте.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'объединить',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'элемент',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'на',
        LANG_TEXT_APPEND_APPENDTEXT: 'добавление текста',
        LANG_TEXT_APPEND_VARIABLE: 'элемент',
        LANG_TEXT_APPEND_TOOLTIP: 'Добавить текст в переменной и 1%.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'долгота',
        LANG_TEXT_LENGTH_TOOLTIP: 'Возвращает количество букв (включая пробелы) в введенного текста.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: '=',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Сравнение двух текстов. Сравниваются независимо от того, имеют ли они прописные буквы в нижнем регистре.',
        LANG_TEXT_SUBSTRING: 'Вырезать',
        LANG_TEXT_SUBSTRING_FROM: 'из',
        LANG_TEXT_SUBSTRING_TO: 'до',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Вырезает текстовые символы из указанных позиций начала и конца,  и создает с ними новый текст.',
        // Расширенные блоки:
        LANG_CATEGORY_ADVANCED: 'Функции портов',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Конвертировать',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Десятичные ',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Шеснадцатиричные',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Восьмеричные',
        LANG_ADVANCED_CONVERSION_BINARY: 'Двоичные',
        LANG_ADVANCED_CONVERSION_VALUE: 'значение',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Преобразование в число по основанию.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Читать значение аналогового PIN # ',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Читает значение заданного аналогового входа.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Писать значение в аналоговый PIN #',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'значение',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Написать значение между 0 и 255 в аналоговый вход данных.',
        LANG_ADVANCED_BUILTIN_LED: 'Встроенный LED',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'состояние',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ВКЛ',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'ВЫКЛ',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Управление интегрированным светодиодом на плате, внутренне соединенным с выводом 13. ',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Читать цифровой PIN# ',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Читает значение определенного цифрового контакта.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Записать в цифровой PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'значение',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN# ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'состояние',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ВКЛ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'ВЫКЛ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Написать значение в конкретном цифровом выводе.',
        LANG_ADVANCED_HIGHLOW_HIGH: 'ВКЛ',
        LANG_ADVANCED_HIGHLOW_LOW: 'ВЫКЛ',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Написать "ВКЛ" или "ВЫКЛ" в соответствии с выбором.',
        LANG_ADVANCED_MATH_RANDOM: 'Случайное число между',
        LANG_ADVANCED_MATH_RANDOM_AND: 'и',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'создает случайное число в интервале между двумя пороговыми значениями.',
        // Процедуры блоки
        LANG_CATEGORY_PROCEDURES: 'Функции',
        LANG_PROCEDURES_RETURN: 'Возврат',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Возвращает значение ',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Вызвать неопределенную функцию.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'функция_без_значения',
        LANG_PROCEDURES_DEFNORETURN_DO: 'Выполнить',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'функция выполняется без возвращения данных.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'функция_со_значением',
        LANG_PROCEDURES_DEFRETURN_DO: 'Выполнить',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'Возврат',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'функция возвращает значение.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Предупреждение: Эта функция дублируется параметры.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'Выполнить',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Без_возврата функция',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'выполняет эту функцию.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'Выполнить',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'С_возвратом функция',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Выполняет эту функцию. Имеется возвращаемое значение.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'параметры',
        LANG_PROCEDURES_MUTATORARG_Field: 'переменная',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Основные функции',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Если условие истинно, то функция возвращает это значение. ',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Внимание: Этот блок может быть использован только в пределах функции, имеющей возвращаемое значение.',
        // Переменные блоков:
        LANG_CATEGORY_VARIABLES: 'Переменная',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Эта переменная не объявлена.',
        LANG_VARIABLES_GLOBAL: 'Переменная',
        LANG_VARIABLES_GLOBAL_TYPE: 'тип',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Определяет и устанавливает глобальную переменную (INT) или текст (String).',
        LANG_VARIABLES_LOCAL: 'локальная переменная',
        LANG_VARIABLES_LOCAL_TYPE: 'тип',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Объявляет и определяет переменную целого типа (INT) или текст (String).',
        LANG_VARIABLES_DEFINE: 'Установить переменную ',
        LANG_VARIABLES_DEFINE_AS: 'как',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Установить значение переменной.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Изменение значения переменной.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Возвращает значение переменной',
        LANG_VARIABLES_PIN_ANALOG: 'аналоговый PIN ',
        LANG_VARIABLES_PIN_DIGITAL: 'цифровой PIN ',
        LANG_VARIABLES_PIN_DIGITAL0: 'ВНИМАНИЕ: цифровой контактный 0 (контактный RX) используется для загрузки скетча. Использование его для подключения электронных компонентов может вызвать проблемы при загрузке новых скетчей.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Выберите нужный контакт.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
        LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
        LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
        LANG_VARIABLES_TYPE_STRING: 'String', // To translate
        // Zum блоки:
        LANG_CATEGORY_ZUM: 'Блоки Zum',
        LANG_ZUM_BUTTON: 'Кнопка',
        LANG_ZUM_BUTTON_PIN: 'PIN# ',
        LANG_ZUM_BUTTON_TOOLTIP: 'Кнопка Zum ',
        LANG_ZUM_FOLLOWER: 'инфракрасный датчик',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'левый PIN # ',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'правый PIN #',
        LANG_ZUM_FOLLOWER_LEFT: 'Cлева',
        LANG_ZUM_FOLLOWER_RIGHT: 'Справа',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Возвращает значение цифрового инфракрасного датчика ',
        LANG_ZUM_INFRARED: 'инфракрасный датчик',
        LANG_ZUM_INFRARED_PIN: 'PIN# ',
        LANG_ZUM_INFRARED_TOOLTIP: 'Возвращает значение цифрового инфракрасного датчика ',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'PIN# ',
        LANG_ZUM_LED_ON: 'ВКЛ',
        LANG_ZUM_LED_OFF: 'ВЫКЛ',
        LANG_ZUM_LED_TOOLTIP: 'светодиодные излучатели Zum ',
        LANG_ZUM_PHOTORESISTOR: 'Датчик света',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN# ',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Возвращает аналоговое значение датчика света (фоторезистора).',
        LANG_ZUM_PIEZO_BUZZER: 'Звукоизлучатель',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN# ',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'Тон',
        LANG_ZUM_PIEZO_BUZZER_DO: 'ДО',
        LANG_ZUM_PIEZO_BUZZER_RE: 'РЕ',
        LANG_ZUM_PIEZO_BUZZER_MI: 'МИ',
        LANG_ZUM_PIEZO_BUZZER_FA: 'ФА',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'СОЛЬ',
        LANG_ZUM_PIEZO_BUZZER_LA: 'ЛЯ',
        LANG_ZUM_PIEZO_BUZZER_SI: 'СИ',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Продолжительность',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Звукоизлучатель пьезоэлектрический.',
        LANG_ZUM_PIEZO_BUZZERAV: 'Расширенный звукоизлучатель',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN # ',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'Тон',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Продолжительность',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Звукоизлучатель - пьезоэлектрический элемент.',
        LANG_ZUM_POTENTIOMETER: 'Потенциометр',
        LANG_ZUM_POTENTIOMETER_PIN: 'PIN# ',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'потенциометр Zum.',
        // Серво блоки:
        LANG_CATEGORY_SERVO: 'Сервоприводы',
        LANG_SERVO_CONT: 'Сервопривод непрерывного вращения',
        LANG_SERVO_CONT_PIN: 'PIN# ',
        LANG_SERVO_CONT_ROT: 'Вращение',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'Вращаться по часовой стрелке',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'вращаться против часовой стрелки',
        LANG_SERVO_CONT_STOPPED: 'Стоп',
        LANG_SERVO_CONT_DELAY: 'Пауза',
        LANG_SERVO_CONT_TOOLTIP: 'Сервопривод непрерывного вращения.',
        LANG_SERVO_MOVE: 'Сервопривод',
        LANG_SERVO_MOVE_PIN: 'PIN# ',
        LANG_SERVO_MOVE_DEGREES: '° (0 ~ 180)',
        LANG_SERVO_MOVE_DELAY: 'Пауза',
        LANG_SERVO_MOVE_TOOLTIP: 'Повернуть вал сервопривода между 0 и 180 градусов.',
        LANG_SERVO_WARNING: 'Вы не можете установить управляющий PIN сервопривода с помощью переменной.',
        // MODULAR Blocks:
        LANG_CATEGORY_MODULAR: 'Модульный',
        LANG_MODULAR_DEFINE: 'Объявить модуль',
        LANG_MODULAR_TYPE: 'типа',
        LANG_MODULAR_PORT: 'на порту',
        LANG_MODULAR_READ: 'Читать состояние ',
        LANG_MODULAR_WRITE: 'Записать в исполнитель ',
        LANG_MODULAR_STATE: 'состояние',
        LANG_MODULAR_STEPPER_MOTOR: 'Записать в шаговый двигатель',
        LANG_MODULAR_VALUE: 'значение',
        LANG_MODULAR_WRITE_SEVEN_DISPLAY: 'Записать в 7-сегментный дисплей',
        LANG_MODULAR_FOUR_VALUE: 'Значение (4 цифры):',
        LANG_MODULAR_SERVO_MOTOR: 'Записать в серводвигатель',
        LANG_MODULAR_DC_MOTOR: 'Записать в двигателе постоянного тока',
        LANG_MODULAR_DC_MOTOR_POWER: 'мощность',
        LANG_MODULAR_DC_MOTOR_DIRECTION: 'и направление',
        LANG_MODULAR_LCD: 'Записать на экран',
        LANG_MODULAR_LCD_TEXT: 'текст',
        LANG_MODULAR_SENSOR_POTENTIOMETER: 'Датчик потенциометра',
        LANG_MODULAR_SENSOR_INFRARED: 'Инфракрасный датчик',
        LANG_MODULAR_SENSOR_BUTTON: 'Кнопочный датчик',
        LANG_MODULAR_SENSOR_DISTANCE: 'Датчик расстояния',
        LANG_MODULAR_ACTUATOR_LED: 'Исполнительный элемент LED',
        LANG_MODULAR_ACTUATOR_BUZZER: 'Исполнительный элемент зуммера',
        LANG_MODULAR_ACTUATOR_STEPPER_MOTOR: 'Исполнительный элемент шагового двигателя',
        LANG_MODULAR_ACTUATOR_DISPLAY_7_SEG: 'Исполнительный элемент 7-сегментного дисплея',
        LANG_MODULAR_ACTUATOR_SERVO_MOTOR: 'Исполнительный элемент серводвигателя',
        LANG_MODULAR_ACTUATOR_DC_MOTOR: 'Исполнительный элемент двигателя постоянного тока',
        LANG_MODULAR_SENSOR_IMU: 'IMU датчик',
        LANG_MODULAR_ACTUATOR_LCD: 'Исполнительный элемент LCD',
        LANG_MODULAR_ACTUATOR_OLED: 'Исполнительный элемент OLED',
        LANG_MODULAR_MODULE_BLUETOOTH: 'Bluetooth модуль',
        LANG_MODULAR_MODULE_WIFI: 'Wi-Fi модуль',
        LANG_MODULAR_ON: 'Включено',
        LANG_MODULAR_OFF: 'Выключено',
        LANG_MODULAR_FORWARD: 'Вперед',
        LANG_MODULAR_BACKWARD: 'Назад',
        // BETTO blocks:
        LANG_CATEGORY_BETTO: 'Бетто',
        LANG_BETTO_DEFINE: 'Объявить Бетто',
        LANG_BETTO_MOVEMENT: 'Движение ',
        LANG_BETTO_VELOCITY: 'со скоростью',
        LANG_BETTO_DANCE: 'Танцевать ',
        LANG_BETTO_SIZE: 'размер ',
        LANG_BETTO_MOVE: 'Двигаться ',
        LANG_BETTO_GESTURE: 'Жест ',
        LANG_BETTO_STAND: 'Положение Стоя',
        LANG_BETTO_MOUTH_CLEAN: 'Очистить рот',
        LANG_BETTO_MOUTH_TEXT: 'Текст рта',
        LANG_BETTO_MOUTH_GLOW: '👄 Яркость рта',
        LANG_BETTO_MOUTH: '👄 Рот',
        LANG_BETTO_ACTION_FORWARD: 'Вперед',
        LANG_BETTO_ACTION_BACKWARD: 'Назад',
        LANG_BETTO_ACTION_TURN_LEFT: 'Повернуть налево',
        LANG_BETTO_ACTION_TURN_RIGHT: 'Повернуть направо',
        LANG_BETTO_ACTION_TILT_LEFT: 'Наклонить налево',
        LANG_BETTO_ACTION_TILT_RIGHT: 'Наклонить направо',
        LANG_BETTO_ACTION_SHAKE_LEFT: 'Потрясти налево',
        LANG_BETTO_ACTION_SHAKE_RIGHT: 'Потрясти направо',
        LANG_BETTO_ACTION_UP: 'Вверх',
        LANG_BETTO_VELOCITY_NORMAL: 'Нормальная',
        LANG_BETTO_VELOCITY_SLOW: 'Медленная',
        LANG_BETTO_VELOCITY_VERY_SLOW: 'Очень медленная',
        LANG_BETTO_VELOCITY_FAST: 'Быстрая',
        LANG_BETTO_VELOCITY_VERY_FAST: 'Очень быстрая',
        LANG_BETTO_VELOCITY_TOO_FAST: 'Слишком быстрая',
        LANG_BETTO_DANCE_MOONWALK_LEFT: 'Лунная походка влево',
        LANG_BETTO_DANCE_MOONWALK_RIGHT: 'Лунная походка вправо',
        LANG_BETTO_DANCE_CRUSAITO_LEFT: 'Крусаито влево',
        LANG_BETTO_DANCE_CRUSAITO_RIGHT: 'Крусаито вправо',
        LANG_BETTO_DANCE_FLAP_UP: 'Взмах вверх',
        LANG_BETTO_DANCE_FLAP_DOWN: 'Взмах вниз',
        LANG_BETTO_VELOCITY_NORMAL: 'Нормальная',
        LANG_BETTO_VELOCITY_SLOW: 'Медленная',
        LANG_BETTO_VELOCITY_VERY_SLOW: 'Очень медленная',
        LANG_BETTO_VELOCITY_FAST: 'Быстрая',
        LANG_BETTO_VELOCITY_VERY_FAST: 'Очень быстрая',
        LANG_BETTO_VELOCITY_TOO_FAST: 'Слишком быстрая',
        LANG_BETTO_SIZE_NORMAL: 'Нормальный',
        LANG_BETTO_SIZE_SMALL: 'Маленький',
        LANG_BETTO_SIZE_LARGE: 'Большой',
        LANG_BETTO_DANCE_MENEITO: 'Менейто',
        LANG_BETTO_DANCE_UP_DOWN: 'Вверх и вниз',
        LANG_BETTO_DANCE_TIPTOE_SWAY: 'На цыпочках и покачивание',
        LANG_BETTO_DANCE_RESTLESS: 'Неспокойный',
        LANG_BETTO_DANCE_SPIN_ASCENDING: 'Восходящий поворот',
        LANG_BETTO_GESTURE_HAPPY: '😃 Счастливый',
        LANG_BETTO_GESTURE_JOYFUL: '🙂 Радостный',
        LANG_BETTO_GESTURE_SAD: '🙁 Грустный',
        LANG_BETTO_GESTURE_SLEEPING: '😴 Спящий',
        LANG_BETTO_GESTURE_CONFUSED: '😕 Запутавшийся',
        LANG_BETTO_GESTURE_FRETUL: '😰 Напуганный',
        LANG_BETTO_GESTURE_LOVE: '😍 Влюбленный',
        LANG_BETTO_GESTURE_ANGRY: '😡 Злой',
        LANG_BETTO_GESTURE_MAGIC: '🤩 Магия',
        LANG_BETTO_GESTURE_WAVE: '😐 Волна',
        LANG_BETTO_GESTURE_VICTORY: '😎 Победа',
        LANG_BETTO_GESTURE_FAIL: '😞 Провал',
        LANG_BETTO_GESTURE_FART: '💩 Пук',
        LANG_BETTO_ACTION_HAPPY: 'Счастливый',
        LANG_BETTO_ACTION_JOYFUL: 'Радостный',
        LANG_BETTO_ACTION_CONTENT: 'Содержательный',
        LANG_BETTO_ACTION_SAD: 'Грустный',
        LANG_BETTO_ACTION_CONFUSED: 'Запутавшийся',
        LANG_BETTO_ACTION_AFFectionate: 'Нежный',
        LANG_BETTO_ACTION_OH: 'Ох',
        LANG_BETTO_ACTION_OOH: 'Ооо',
        LANG_BETTO_ACTION_SURPRISE: 'Сюрприз',
        LANG_BETTO_ACTION_CONNECTION: 'Соединение',
        LANG_BETTO_ACTION_DISCONNECTION: 'Отключение',
        LANG_BETTO_ACTION_BUTTON: 'Кнопка',
        LANG_BETTO_ACTION_MODE_1: 'Режим 1',
        LANG_BETTO_ACTION_MODE_2: 'Режим 2',
        LANG_BETTO_ACTION_MODE_3: 'Режим 3',
        LANG_BETTO_ACTION_SLEEP: 'Спать',
        LANG_BETTO_ACTION_FART_1: 'Пук 1',
        LANG_BETTO_ACTION_FART_2: 'Пук 2',
        LANG_BETTO_ACTION_FART_3: 'Пук 3',
        LANG_BETTO_MOUTH_HAPPY: '😃 Счастливый',
        LANG_BETTO_MOUTH_JOYFUL: '🙂 Радостный',
        LANG_BETTO_MOUTH_SMILE: '😊 Улыбка',
        LANG_BETTO_MOUTH_SAD: '😦 Грустный',
        LANG_BETTO_MOUTH_DEJECTED: '🙁 Унылый',
        LANG_BETTO_MOUTH_SMALL_SURPRISE: '😮 Удивленный',
        LANG_BETTO_MOUTH_BIG_SURPRISE: '😲 Пораженный',
        LANG_BETTO_MOUTH_CONFUSED: '😕 Запутавшийся',
        LANG_BETTO_MOUTH_TONGUE_OUT: '😛 Язык',
        LANG_BETTO_MOUTH_CULITO: '🙃 Тупой ',
        LANG_BETTO_MOUTH_SERIOUS: '😑 Серьезный',
        LANG_BETTO_MOUTH_DISAPPOINTED: '🙄 Разочарованный',
        LANG_BETTO_MOUTH_LOVE: '💖 Влюбленный',
        LANG_BETTO_MOUTH_VAMPIRE: '🦇 Вампир',
        LANG_BETTO_MOUTH_TEETH: '🦇 Зубы',
        LANG_BETTO_MOUTH_NO: '❌ Нет',
        LANG_BETTO_MOUTH_OK: '✅ ОК',
        LANG_BETTO_MOUTH_QUESTION: '❓ Вопрос',
        LANG_BETTO_MOUTH_THUNDER: '⚡ Гром',
        // УЗК - Бетто
        LANG_ULTRASOUND_DISTANCE: 'Расстояние в см',
        //Блоки КАРЛИТТО:
        LANG_CATEGORY_CARLITTO: 'Карлитто',
        LANG_CARLITTO_DEFINE: 'Объявить Карлитто',
        LANG_CARLITTO_MOTOR_LEFT: 'Левый мотор: ',
        LANG_CARLITTO_MOTOR_RIGHT: 'Правый мотор: ',
        LANG_CARLITTO_POWER_LEFT: 'Левая мощность: ',
        LANG_CARLITTO_POWER_RIGHT: 'Правая мощность: ',
        LANG_CARLITTO_POTENTIOMETER: 'Потенциометр: ',
        LANG_CARLITTO_MOVE_IN: 'Движение в ',
        LANG_CARLITTO_STOP: 'Остановить Карлитто',
        // Raspberry
        LANG_CATEGORY_RASPBERRY: 'Raspberry',
        LANG_RASPBERRY_SEND: 'Отправлено на Raspberry'
    };
    return language;
};