export function language() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Dupliquer',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Effacer le commentaire',
        BLOCKLY_MSG_ADD_COMMENT: 'Ajouter un commentaire',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Données externes',
        BLOCKLY_MSG_INLINE_INPUTS: 'Données internes',
        BLOCKLY_MSG_DELETE_BLOCK: 'Supprimer le bloc',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Supprimer %1 blocs',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Comprimer le bloc',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Étendre le bloc',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Désactiver le bloc',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Activer le bloc',
        BLOCKLY_MSG_HELP: 'Aide',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Comprimer les blocs',
        BLOCKLY_MSG_EXPAND_ALL: 'Étendre les blocs',
        LANG_VARIABLES_SET_ITEM: 'élément',
        LANG_RESERVED_WORDS: 'mot réservé : ce nom n’est pas autorisé.',
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Logique',
        LANG_LOGIC_OPERATION_AND: 'et',
        LANG_LOGIC_OPERATION_OR: 'ou',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Vérifie si les deux données correspondent.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Vérifie si les deux données sont différentes.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Vérifie si la première donnée est inférieure à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Vérifie si la première donnée est inférieure ou égale à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Vérifie si la première donnée est supérieure à la seconde.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Vérifie si la première donnée est supérieure ou égale à la seconde.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Vérifie si les deux données sont vraies.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Vérifie si l’une ou l’autre donnée est vraie.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'pas',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Renvoie l’opposé de la donnée.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'vrai',
        LANG_LOGIC_BOOLEAN_FALSE: 'faux',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Renvoie la valeur vrai ou faux.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Communication',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth : recevoir',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Renvoie les données reçues par le module Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth : envoyer',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Envoyer',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Envoie les données via le module Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Définition du Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Débit (bauds)',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'CodePin',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recevoir',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Envoyer',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Définition du module Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Port série Bluetooth disponible',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le module Bluetooth est disponible ou non.',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Port série disponible',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le port série est disponible ou non',
        LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
        LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimer via le port série',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime les données en caractères ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimer via le port série avec retour chariot',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime les données en caractères ASCII et finit par un retour chariot (RC).',
        LANG_ADVANCED_SERIAL_READ: 'Lire via le port série',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lit les données reçues via le port série comme des octets.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Lire chaîne via le port série',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lit les données reçues via le port série comme des caractères ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Caractères spéciaux',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulation',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retour chariot',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Saut de ligne',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Utilise des caractères spéciaux.',
        //bq blocks :
        LANG_CATEGORY_BQ: 'Octopus bloqs',
        LANG_BQ_BAT: 'BAT – Capteur à ultrasons',
        LANG_BQ_BAT_RED_PIN: 'BROCHE ECHO#',
        LANG_BQ_BAT_BLUE_PIN: 'BROCHE TRIGGER#',
        LANG_BQ_BAT_TOOLTIP: 'Renvoie la distance mesurée par le capteur à ultrasons.',
        LANG_BQ_BUTTON: 'Bouton',
        LANG_BQ_BUTTON_PIN: 'BROCHE#',
        LANG_BQ_BUTTON_TOOLTIP: 'Bouton',
        LANG_BQ_BUTTONS: 'Plaque de boutons',
        LANG_BQ_BUTTONS_PIN: 'BROCHE#',
        LANG_BQ_BUTTONS_BUTTON_A: 'Bouton #A',
        LANG_BQ_BUTTONS_BUTTON_B: 'Bouton #B',
        LANG_BQ_BUTTONS_BUTTON_C: 'Bouton #C',
        LANG_BQ_BUTTONS_BUTTON_D: 'Bouton #D',
        LANG_BQ_BUTTONS_BUTTON_E: 'Bouton #E',
        LANG_BQ_BUTTONS_TOOLTIP: 'Plaque de boutons',
        LANG_BQ_INFRARED: 'Capteur infrarouge',
        LANG_BQ_INFRARED_PIN: 'BROCHE#',
        LANG_BQ_INFRARED_TOOLTIP: 'Renvoie la valeur numérique lue par le capteur infrarouge.',
        LANG_BQ_JOYSTICK: 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X: 'Axe X BROCHE#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Axe Y BROCHE#',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Bouton-poussoir BROCHE#',
        LANG_BQ_JOYSTICK_POSITION: 'Position du joystick',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'BROCHE#',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'ON',
        LANG_BQ_LED_OFF: 'OFF',
        LANG_BQ_LED_TOOLTIP: 'LED',
        LANG_BQ_PHOTORESISTOR: 'Capteur de luminosité',
        LANG_BQ_PHOTORESISTOR_PIN: 'BROCHE#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Renvoie la valeur analogique mesurée par le capteur de luminosité.',
        LANG_BQ_PIEZO_BUZZER: 'Buzzer',
        LANG_BQ_PIEZO_BUZZER_PIN: 'BROCHE#',
        LANG_BQ_PIEZO_BUZZER_TONE: 'TONALITÉ',
        LANG_BQ_PIEZO_BUZZER_DO: 'DO',
        LANG_BQ_PIEZO_BUZZER_RE: 'RÉ',
        LANG_BQ_PIEZO_BUZZER_MI: 'MI',
        LANG_BQ_PIEZO_BUZZER_FA: 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA: 'LA',
        LANG_BQ_PIEZO_BUZZER_SI: 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Durée [ms]',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
        LANG_BQ_PIEZO_BUZZERAV: 'Buzzer avancé',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'BROCHE#',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONALITÉ',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Durée [ms]',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avancé',
        LANG_BQ_POTENTIOMETER: 'Potentiomètre',
        LANG_BQ_POTENTIOMETER_PIN: 'BROCHE#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Renvoie la valeur analogique mesurée par le potentiomètre.',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'Blocs LCD',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'LCD Pins',
        LANG_LCD_DEF_TOOLTIP: 'Bloc qui définit l’écran LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avancé',
        LANG_LCD_ADVANCED_ROWS: 'Rangées',
        LANG_LCD_ADVANCED_COLUMNS: 'Colonnes',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc définissant le LCD avancé',
        LANG_LCD_SETBACKLIGHT: 'LCD: définir le rétroéclairage(',
        LANG_LCD_SETBACKLIGHT_CLOSE: ')',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Définit le rétroéclairage de l’écran LCD.',
        LANG_LCD_PRINT: 'LCD : imprimer ',
        LANG_LCD_PRINT_POSITION: 'Définir la position du texte ?',
        LANG_LCD_PRINT_TOOLTIP: 'Affiche une chaîne de caractères sur l’écran LCD à l’endroit défini ou au prochain endroit disponible.',
        LANG_LCD_CLEAR: 'LCD : effacer',
        LANG_LCD_CLEAR_TOOLTIP: 'Effacer l’écran LCD',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Contrôle',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Attendre (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Attend le temps défini en millisecondes (ms)',
        LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
        LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
        LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
        LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
        LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
        LANG_CONTROLS_EXECUTE: 'Execute',
        LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condition est vraie, exécute les instructions.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condition est vraie, exécuter le premier bloc d’instruction. Sinon, exécuter le second bloc d’instruction.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instruction.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le deuxième bloc d’instruction. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’instruction.',
        LANG_CONTROLS_IF_MSG_IF: 'si',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'ou bien si',
        LANG_CONTROLS_IF_MSG_ELSE: 'sinon',
        LANG_CONTROLS_IF_MSG_THEN: 'exécuter',
        LANG_CONTROLS_IF_IF_Field_IF: 'si',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc “si”.',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'ou bien si',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Ajouter une condition au bloc “si”.',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'sinon',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Ajouter une condition finale, globale, au bloc “si”.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Il n’est pas possible de définir une variable comme valeur initiale d’un bloc “compter”.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Il n’est pas possible de définir une variable comme valeur finale d’un bloc “compter”.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'compter avec',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'de',
        LANG_CONTROLS_FOR_INPUT_TO: 'à',
        LANG_CONTROLS_FOR_INPUT_DO: 'exécuter',
        LANG_CONTROLS_FOR_TOOLTIP: 'Compter en partant d’un nombre donné jusqu’à un nombre donné. Chaque fois que le compte augmente de un, la variable prend cette valeur puis exécute les instructions.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'tant que',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'jusqu’à',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Tant que la condition est vraie, exécuter les instructions.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Tant que la condition est fausse, exécuter les instructions.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Répéter',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'fois',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'exécuter',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'Répéter les instructions un certain nombre de fois',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'la boucle',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompre',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuer avec l’itération suivante',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrompre la boucle contenant ces instructions.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Passer le reste de cette boucle et continuer avec la prochaine itération.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attention : Ce bloc ne peut être utilisé que dans une boucle.',
        LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
        LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
        LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
        LANG_CONTROLS_SWITCH: 'si ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Exécute les instructions du cas.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'L’expression qui apparaît dans le bloc “si” est évaluée une seule fois',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'La mention “si autre cas”, spécifie le code à exécuter si aucun cas ne correspond',
        LANG_CONTROLS_SWITCH_IS: 'cas : ',
        LANG_CONTROLS_SWITCH_CASE: 'cas',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'si autre cas',
        LANG_CONTROLS_SWITCH_DO: 'exécuter',
        //math blocks :
        LANG_CATEGORY_MATH: 'Mathématiques',
        LANG_MATH_ADVANCED_MAP_MAP: 'Échelonner',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'à [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Rééchelonne les données d’un certain intervalle à un autre.',
        LANG_MATH_NUMBER_TOOLTIP: 'Chiffre',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Tableau',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Renvoie la valeur d’un élément donné du tableau.',
        LANG_MATH_MODULO_TOOLTIP: 'Renvoie le reste de la division des deux chiffres.',
        LANG_MATH_BASE_MAP: 'Échelonner ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valeur de [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Rééchelonner les données entre [0-1023] sur un autre intervalle.',
        LANG_MATH_SINGLE_OP_ROOT: 'racine carrée',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valeur absolue',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Renvoie la racine carrée d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Renvoie la valeur absolue d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Renvoie la négation d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Renvoie le logarithme népérien d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Renvoie le logarithme décimal d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Renvoie e à la puissance d’un chiffre.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Renvoie 10 à la puissance d’un chiffre.',
        //text blocks:
        LANG_CATEGORY_TEXT: 'Texte',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Une lettre, un mot ou une chaîne de caractères.',
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'créer texte avec',
        LANG_TEXT_JOIN_TOOLTIP: 'Créer un texte en associant n’importe quel nombre d’éléments.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'associer',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc texte.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'élément',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Ajouter un élément au texte.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'associer',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'élément',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'à',
        LANG_TEXT_APPEND_APPENDTEXT: 'ajouter texte',
        LANG_TEXT_APPEND_VARIABLE: 'élément',
        LANG_TEXT_APPEND_TOOLTIP: 'Ajouter un texte à la variable %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longueur',
        LANG_TEXT_LENGTH_TOOLTIP: 'Renvoie le nombre de caractères (espaces inclus) dans le texte donné.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Vérifie si les deux chaînes de caractères sont identiques, sans tenir compte de la casse. ',
        LANG_TEXT_SUBSTRING: 'Citer ',
        LANG_TEXT_SUBSTRING_FROM: 'de',
        LANG_TEXT_SUBSTRING_TO: 'à',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Extraire une sous-chaîne de caractères d’une chaîne donnée à partir de l’intervalle défini par les deux valeurs.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Arduino',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Décimale',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadécimale',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY: 'Binaire',
        LANG_ADVANCED_CONVERSION_VALUE: 'valeur',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir un nombre d’une base à une autre.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Lire broche analogique#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lit la valeur provenant d’une broche analogique donnée',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Écrire dans la broche analogique#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valeur',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Écrire une valeur comprise entre 0 et 255 pour une broche de sortie analogique donnée.',
        LANG_ADVANCED_BUILTIN_LED: 'LED de la carte',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'état',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED de la carte qui est connectée de manière interne à la broche 13',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Lire la broche numérique#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lit la valeur provenant d’une broche numérique donnée.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Écrire dans la broche numérique',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'la valeur',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: '#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'état',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ÉLEVÉ',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAS',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Écrire une valeur dans une broche numérique donnée',
        LANG_ADVANCED_HIGHLOW_HIGH: 'ÉLEVÉ',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAS',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'ÉLEVÉ OU BAS',
        LANG_ADVANCED_MATH_RANDOM: 'Aléatoire comprise entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' et ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Renvoie un chiffre aléatoire compris dans l’intervalle défini.',
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Fonctions',
        LANG_PROCEDURES_RETURN: 'retourner',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Retourner une valeur',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Appel de fonction sans définition préalable de cette fonction',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'fonction_sans_renvoi',
        LANG_PROCEDURES_DEFNORETURN_DO: 'exécuter',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Une fonction sans renvoi de valeur.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'fonction_avec_renvoi',
        LANG_PROCEDURES_DEFRETURN_DO: 'exécuter',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'renvoie',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Une fonction avec renvoi de valeur.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attention : cette fonction a des paramètres dupliqués.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'exécuter',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'fonction_sans_renvoi',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Appelle une fonction sans renvoi de valeur.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'exécuter',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'fonction_avec_renvoi',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Appelle une fonction avec renvoi de valeur.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paramètres',
        LANG_PROCEDURES_MUTATORARG_Field: 'variable :',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Surligner la fonction',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condition est vraie, renvoie cette valeur.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Attention : Ce bloc doit être utilisé uniquement dans une fonction avec renvoi de valeur.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variables',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Cette variable n’est pas déclarée.',
        LANG_VARIABLES_GLOBAL: 'Déclarer variable GLOBALE',
        LANG_VARIABLES_GLOBAL_TYPE: 'de type ',
        LANG_VARIABLES_GLOBAL_EQUALS: 'égale à',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Déclare et définit une variable GLOBALE de type entier (int) ou texte (string).',
        LANG_VARIABLES_LOCAL: 'Déclarer variable ',
        LANG_VARIABLES_LOCAL_TYPE: 'de type ',
        LANG_VARIABLES_LOCAL_EQUALS: 'égale à',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Déclarer et définir une variable LOCALE de type entier (int) ou texte (string).',
        LANG_VARIABLES_DEFINE: 'Définir variable ',
        LANG_VARIABLES_DEFINE_AS: 'comme',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Définir la valeur d’une variable.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Détermine la valeur d’une variable.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Renvoie la valeur d’une variable.',
        LANG_VARIABLES_PIN_ANALOG: 'Broche analogique',
        LANG_VARIABLES_PIN_DIGITAL: 'Broche numérique',
        LANG_VARIABLES_PIN_DIGITAL0: 'ATTENTION : la broche numérique 0 (broche RX) sert à charger les programmes. Si elle est utilisée pour connecter des composants électroniques, des problèmes peuvent survenir lors du chargement d’un nouveau programme.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Sélectionner la BROCHE.',
        LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
        LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
        LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
        LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
        LANG_VARIABLES_TYPE_STRING: 'String', // To translate
        //zum blocks :
        LANG_CATEGORY_ZUM: 'Zum bloqs',
        LANG_ZUM_BUTTON: 'Bouton',
        LANG_ZUM_BUTTON_PIN: 'BROCHE#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Bouton zum',
        LANG_ZUM_FOLLOWER: 'Capteur infrarouge',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'BROCHE GAUCHE#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'BROCHE DROITE#',
        LANG_ZUM_FOLLOWER_LEFT: 'Gauche',
        LANG_ZUM_FOLLOWER_RIGHT: 'Droite',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Renvoie la valeur numérique lue par le capteur infrarouge',
        LANG_ZUM_INFRARED: 'Capteur infrarouge',
        LANG_ZUM_INFRARED_PIN: 'BROCHE#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Renvoie la valeur numérique lue par le capteur infrarouge',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'BROCHE#',
        LANG_ZUM_LED_ON: 'ON',
        LANG_ZUM_LED_OFF: 'OFF',
        LANG_ZUM_LED_TOOLTIP: 'LED zum',
        LANG_ZUM_PHOTORESISTOR: 'Capteur de luminosité',
        LANG_ZUM_PHOTORESISTOR_PIN: 'BROCHE#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Renvoie la valeur analogique mesurée par le capteur de luminosité.',
        LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'BROCHE#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TONALITÉ',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RÉ',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Durée [ms]',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
        LANG_ZUM_PIEZO_BUZZERAV: ' Buzzer avancé',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'BROCHE#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONALITÉ',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durée [ms]',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avancé',
        LANG_ZUM_POTENTIOMETER: 'Potentiomètre',
        LANG_ZUM_POTENTIOMETER_PIN: 'BROCHE#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Renvoie la valeur analogue mesurée par le potentiomètre.',
        //servo blocks :
        LANG_CATEGORY_SERVO: 'Servo',
        LANG_SERVO_CONT: 'Servo',
        LANG_SERVO_CONT_PIN: 'BROCHE#',
        LANG_SERVO_CONT_ROT: 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'TOURNER DANS LE SENS DES AIGUILLES D’UNE MONTRE',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TOURNER DANS LE SENS INVERSE DES AIGUILLES D’UNE MONTRE ',
        LANG_SERVO_CONT_STOPPED: 'ARRÊTÉ',
        LANG_SERVO_CONT_DELAY: 'Attendre [ms]',
        LANG_SERVO_CONT_TOOLTIP: 'Servo à rotation continue.',
        LANG_SERVO_MOVE: 'Servo',
        LANG_SERVO_MOVE_PIN: 'BROCHE#',
        LANG_SERVO_MOVE_DEGREES: 'Degrés (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Attendre [ms]',
        LANG_SERVO_MOVE_TOOLTIP: 'Bouger le servo entre 0 et 180 degrés',
        LANG_SERVO_WARNING: 'Il n’est pas possible de déterminer la broche du servo à l’aide d’une variable',
        // Blocs MODULAIRES :
        LANG_CATEGORY_MODULAR: 'Modulaire',
        LANG_MODULAR_DEFINE: 'Déclarer le module',
        LANG_MODULAR_TYPE: 'de type',
        LANG_MODULAR_PORT: 'sur le port',
        LANG_MODULAR_READ: 'Lire l\'état de ',
        LANG_MODULAR_WRITE: 'Écrire sur l\'actionneur ',
        LANG_MODULAR_STATE: 'l\'état',
        LANG_MODULAR_STEPPER_MOTOR: 'Écrire sur le moteur pas à pas',
        LANG_MODULAR_VALUE: 'la valeur',
        LANG_MODULAR_WRITE_SEVEN_DISPLAY: 'Écrire sur l\'afficheur 7 segments',
        LANG_MODULAR_FOUR_VALUE: 'Valeur (4 chiffres) :',
        LANG_MODULAR_SERVO_MOTOR: 'Écrire sur le servomoteur',
        LANG_MODULAR_DC_MOTOR: 'Écrire sur le moteur à courant continu',
        LANG_MODULAR_DC_MOTOR_POWER: 'la puissance',
        LANG_MODULAR_DC_MOTOR_DIRECTION: 'et la direction',
        LANG_MODULAR_LCD: 'Écrire sur l\'écran',
        LANG_MODULAR_LCD_TEXT: 'le texte',
        LANG_MODULAR_SENSOR_POTENTIOMETER: 'Capteur Potentiomètre',
        LANG_MODULAR_SENSOR_INFRARED: 'Capteur Infrarouge',
        LANG_MODULAR_SENSOR_BUTTON: 'Capteur Bouton',
        LANG_MODULAR_SENSOR_DISTANCE: 'Capteur de Distance',
        LANG_MODULAR_ACTUATOR_LED: 'Actionneur LED',
        LANG_MODULAR_ACTUATOR_BUZZER: 'Actionneur Buzzer',
        LANG_MODULAR_ACTUATOR_STEPPER_MOTOR: 'Actionneur Moteur Pas à Pas',
        LANG_MODULAR_ACTUATOR_DISPLAY_7_SEG: 'Actionneur Afficheur 7 segments',
        LANG_MODULAR_ACTUATOR_SERVO_MOTOR: 'Actionneur Servomoteur',
        LANG_MODULAR_ACTUATOR_DC_MOTOR: 'Actionneur Moteur DC',
        LANG_MODULAR_SENSOR_IMU: 'Capteur IMU',
        LANG_MODULAR_ACTUATOR_LCD: 'Actionneur LCD',
        LANG_MODULAR_ACTUATOR_OLED: 'Actionneur OLED',
        LANG_MODULAR_MODULE_BLUETOOTH: 'Module Bluetooth',
        LANG_MODULAR_MODULE_WIFI: 'Module Wifi',
        LANG_MODULAR_ON: 'Allumé',
        LANG_MODULAR_OFF: 'Éteint',
        LANG_MODULAR_FORWARD: 'Avant',
        LANG_MODULAR_BACKWARD: 'Arrière',
        // Blocs BETTO :
        LANG_CATEGORY_BETTO: 'Betto',
        LANG_BETTO_DEFINE: 'Déclarer Betto',
        LANG_BETTO_MOVEMENT: 'Mouvement ',
        LANG_BETTO_VELOCITY: 'avec vitesse',
        LANG_BETTO_DANCE: 'Danser ',
        LANG_BETTO_SIZE: 'taille ',
        LANG_BETTO_MOVE: 'Déplacer ',
        LANG_BETTO_GESTURE: 'Geste ',
        LANG_BETTO_STAND: 'Position Debout',
        LANG_BETTO_MOUTH_CLEAN: 'Effacer la Bouche',
        LANG_BETTO_MOUTH_TEXT: 'Texte de Bouche',
        LANG_BETTO_MOUTH_GLOW: '👄 Brillance de Bouche',
        LANG_BETTO_MOUTH: '👄 Bouche',
        LANG_BETTO_ACTION_FORWARD: 'Avancer',
        LANG_BETTO_ACTION_BACKWARD: 'Reculer',
        LANG_BETTO_ACTION_TURN_LEFT: 'Tourner à gauche',
        LANG_BETTO_ACTION_TURN_RIGHT: 'Tourner à droite',
        LANG_BETTO_ACTION_TILT_LEFT: 'Incliner à gauche',
        LANG_BETTO_ACTION_TILT_RIGHT: 'Incliner à droite',
        LANG_BETTO_ACTION_SHAKE_LEFT: 'Secouer à gauche',
        LANG_BETTO_ACTION_SHAKE_RIGHT: 'Secouer à droite',
        LANG_BETTO_ACTION_UP: 'Monter',
        LANG_BETTO_VELOCITY_NORMAL: 'Normal',
        LANG_BETTO_VELOCITY_SLOW: 'Lent',
        LANG_BETTO_VELOCITY_VERY_SLOW: 'Très lent',
        LANG_BETTO_VELOCITY_FAST: 'Rapide',
        LANG_BETTO_VELOCITY_VERY_FAST: 'Très rapide',
        LANG_BETTO_VELOCITY_TOO_FAST: 'Trop rapide',
        LANG_BETTO_DANCE_MOONWALK_LEFT: 'Moonwalk Gauche',
        LANG_BETTO_DANCE_MOONWALK_RIGHT: 'Moonwalk Droit',
        LANG_BETTO_DANCE_CRUSAITO_LEFT: 'Crusaito Gauche',
        LANG_BETTO_DANCE_CRUSAITO_RIGHT: 'Crusaito Droit',
        LANG_BETTO_DANCE_FLAP_UP: 'Battement Haut',
        LANG_BETTO_DANCE_FLAP_DOWN: 'Battement Bas',
        LANG_BETTO_SIZE_NORMAL: 'Normal',
        LANG_BETTO_SIZE_SMALL: 'Petit',
        LANG_BETTO_SIZE_LARGE: 'Grand',
        LANG_BETTO_DANCE_MENEITO: 'Meneito',
        LANG_BETTO_DANCE_UP_DOWN: 'Monter Descendre',
        LANG_BETTO_DANCE_TIPTOE_SWAY: 'Pointe et Balancement',
        LANG_BETTO_DANCE_RESTLESS: 'Agité',
        LANG_BETTO_DANCE_SPIN_ASCENDING: 'Rotation Ascendante',
        LANG_BETTO_GESTURE_HAPPY: '😃 Heureux',
        LANG_BETTO_GESTURE_JOYFUL: '🙂 Joyeux',
        LANG_BETTO_GESTURE_SAD: '🙁 Triste',
        LANG_BETTO_GESTURE_SLEEPING: '😴 Dormant',
        LANG_BETTO_GESTURE_CONFUSED: '😕 Confus',
        LANG_BETTO_GESTURE_FRETUL: '😰 Effrayé',
        LANG_BETTO_GESTURE_LOVE: '😍 Amoureux',
        LANG_BETTO_GESTURE_ANGRY: '😡 En colère',
        LANG_BETTO_GESTURE_MAGIC: '🤩 Magique',
        LANG_BETTO_GESTURE_WAVE: '😐 Vague',
        LANG_BETTO_GESTURE_VICTORY: '😎 Victoire',
        LANG_BETTO_GESTURE_FAIL: '😞 Échec',
        LANG_BETTO_GESTURE_FART: '💩 Pet',
        LANG_BETTO_ACTION_HAPPY: 'Heureux',
        LANG_BETTO_ACTION_JOYFUL: 'Joyeux',
        LANG_BETTO_ACTION_CONTENT: 'Content',
        LANG_BETTO_ACTION_SAD: 'Triste',
        LANG_BETTO_ACTION_CONFUSED: 'Confus',
        LANG_BETTO_ACTION_AFFectionate: 'Affectionné',
        LANG_BETTO_ACTION_OH: 'Oh',
        LANG_BETTO_ACTION_OOH: 'Oohh',
        LANG_BETTO_ACTION_SURPRISE: 'Surprise',
        LANG_BETTO_ACTION_CONNECTION: 'Connexion',
        LANG_BETTO_ACTION_DISCONNECTION: 'Déconnexion',
        LANG_BETTO_ACTION_BUTTON: 'Bouton',
        LANG_BETTO_ACTION_MODE_1: 'Mode 1',
        LANG_BETTO_ACTION_MODE_2: 'Mode 2',
        LANG_BETTO_ACTION_MODE_3: 'Mode 3',
        LANG_BETTO_ACTION_SLEEP: 'Dormir',
        LANG_BETTO_ACTION_FART_1: 'Pet 1',
        LANG_BETTO_ACTION_FART_2: 'Pet 2',
        LANG_BETTO_ACTION_FART_3: 'Pet 3',
        LANG_BETTO_MOUTH_HAPPY: '😃 Heureux',
        LANG_BETTO_MOUTH_JOYFUL: '🙂 Joyeux',
        LANG_BETTO_MOUTH_SMILE: '😊 Sourire',
        LANG_BETTO_MOUTH_SAD: '😦 Triste',
        LANG_BETTO_MOUTH_DEJECTED: '🙁 Déprimé',
        LANG_BETTO_MOUTH_SMALL_SURPRISE: '😮 Surpris',
        LANG_BETTO_MOUTH_BIG_SURPRISE: '😲 Étonné',
        LANG_BETTO_MOUTH_CONFUSED: '😕 Confus',
        LANG_BETTO_MOUTH_TONGUE_OUT: '😛 Langue',
        LANG_BETTO_MOUTH_CULITO: '🙃 Idiot',
        LANG_BETTO_MOUTH_SERIOUS: '😑 Sérieux',
        LANG_BETTO_MOUTH_DISAPPOINTED: '🙄 Déçu',
        LANG_BETTO_MOUTH_LOVE: '💖 Amoureux',
        LANG_BETTO_MOUTH_VAMPIRE: '🦇 Vampire',
        LANG_BETTO_MOUTH_TEETH: '🦇 Dents',
        LANG_BETTO_MOUTH_NO: '❌ Non',
        LANG_BETTO_MOUTH_OK: '✅ OK',
        LANG_BETTO_MOUTH_QUESTION: '❓ Question',
        LANG_BETTO_MOUTH_THUNDER: '⚡ Tonnerre',
        LANG_BETTO_VELOCITY_NORMAL: 'Normal',
        LANG_BETTO_VELOCITY_SLOW: 'Lent',
        LANG_BETTO_VELOCITY_VERY_SLOW: 'Très lent',
        LANG_BETTO_VELOCITY_FAST: 'Rapide',
        LANG_BETTO_VELOCITY_VERY_FAST: 'Très rapide',
        LANG_BETTO_VELOCITY_TOO_FAST: 'Trop rapide',
        // ULTRASONS - Betto
        LANG_ULTRASOUND_DISTANCE: 'Distance en cm',
        // Blocs BETTO :
        LANG_CATEGORY_CARLITTO: 'Carlitto',
        LANG_CARLITTO_DEFINE: 'Déclarer Carlitto',
        LANG_CARLITTO_MOTOR_LEFT: 'Moteur gauche : ',
        LANG_CARLITTO_MOTOR_RIGHT: 'Moteur droit : ',
        LANG_CARLITTO_POWER_LEFT: 'Puissance gauche : ',
        LANG_CARLITTO_POWER_RIGHT: 'Puissance droite : ',
        LANG_CARLITTO_POTENTIOMETER: 'Potentiomètre : ',
        LANG_CARLITTO_MOVE_IN: 'Mouvement en ',
        LANG_CARLITTO_STOP: 'Arrêter Carlitto',
        // Raspberry
        LANG_CATEGORY_RASPBERRY: 'Raspberry',
        LANG_RASPBERRY_SEND: 'Envoyé à Raspberry'
    };
    return language;
};