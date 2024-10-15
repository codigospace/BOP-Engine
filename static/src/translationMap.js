import { language as enGBlang } from "../lang/en-GB.js";
import { language as enESlang } from "../lang/en-ES.js";
import { language as frFRlang } from "../lang/fr-FR.js";
import { language as itITlang } from "../lang/it-IT.js";
import { language as RUlang } from "../lang/ru.js";

export const translationMap = {
    'en-GB': {
        'functions': enGBlang().LANG_CATEGORY_PROCEDURES,
        'control': enGBlang().LANG_CATEGORY_CONTROLS,
        'logic': enGBlang().LANG_CATEGORY_LOGIC,
        'math': enGBlang().LANG_CATEGORY_MATH,
        'variables': enGBlang().LANG_CATEGORY_VARIABLES,
        'text': enGBlang().LANG_CATEGORY_TEXT,
        'communication': enGBlang().LANG_CATEGORY_COMMUNICATION,
        'modular': enGBlang().LANG_CATEGORY_MODULAR,
        'betto': enGBlang().LANG_CATEGORY_BETTO,
        'carlitto': enGBlang().LANG_CATEGORY_CARLITTO,
        'arduino': enGBlang().LANG_CATEGORY_ADVANCED,
        'raspberry': enGBlang().LANG_CATEGORY_RASPBERRY
    },
    'es-ES': {
        'functions': enESlang().LANG_CATEGORY_PROCEDURES,
        'control': enESlang().LANG_CATEGORY_CONTROLS,
        'logic': enESlang().LANG_CATEGORY_LOGIC,
        'math': enESlang().LANG_CATEGORY_MATH,
        'variables': enESlang().LANG_CATEGORY_VARIABLES,
        'text': enESlang().LANG_CATEGORY_TEXT,
        'communication': enESlang().LANG_CATEGORY_COMMUNICATION,
        'modular': enESlang().LANG_CATEGORY_MODULAR,
        'betto': enESlang().LANG_CATEGORY_BETTO,
        'carlitto': enESlang().LANG_CATEGORY_CARLITTO,
        'arduino': enESlang().LANG_CATEGORY_ADVANCED,
        'raspberry': enESlang().LANG_CATEGORY_RASPBERRY
    },
    'fr-FR': {
        'functions': frFRlang().LANG_CATEGORY_PROCEDURES,
        'control': frFRlang().LANG_CATEGORY_CONTROLS,
        'logic': frFRlang().LANG_CATEGORY_LOGIC,
        'math': frFRlang().LANG_CATEGORY_MATH,
        'variables': frFRlang().LANG_CATEGORY_VARIABLES,
        'text': frFRlang().LANG_CATEGORY_TEXT,
        'communication': frFRlang().LANG_CATEGORY_COMMUNICATION,
        'modular': frFRlang().LANG_CATEGORY_MODULAR,
        'betto': frFRlang().LANG_CATEGORY_BETTO,
        'carlitto': frFRlang().LANG_CATEGORY_CARLITTO,
        'arduino': frFRlang().LANG_CATEGORY_ADVANCED,
        'raspberry': frFRlang().LANG_CATEGORY_RASPBERRY
    },
    'it-IT': {
        'functions': itITlang().LANG_CATEGORY_PROCEDURES,
        'control': itITlang().LANG_CATEGORY_CONTROLS,
        'logic': itITlang().LANG_CATEGORY_LOGIC,
        'math': itITlang().LANG_CATEGORY_MATH,
        'variables': itITlang().LANG_CATEGORY_VARIABLES,
        'text': itITlang().LANG_CATEGORY_TEXT,
        'communication': itITlang().LANG_CATEGORY_COMMUNICATION,
        'modular': itITlang().LANG_CATEGORY_MODULAR,
        'betto': itITlang().LANG_CATEGORY_BETTO,
        'carlitto': itITlang().LANG_CATEGORY_CARLITTO,
        'arduino': itITlang().LANG_CATEGORY_ADVANCED,
        'raspberry': itITlang().LANG_CATEGORY_RASPBERRY
    },
    'ru': {
        'functions': RUlang().LANG_CATEGORY_PROCEDURES,
        'control': RUlang().LANG_CATEGORY_CONTROLS,
        'logic': RUlang().LANG_CATEGORY_LOGIC,
        'math': RUlang().LANG_CATEGORY_MATH,
        'variables': RUlang().LANG_CATEGORY_VARIABLES,
        'text': RUlang().LANG_CATEGORY_TEXT,
        'communication': RUlang().LANG_CATEGORY_COMMUNICATION,
        'modular': RUlang().LANG_CATEGORY_MODULAR,
        'betto': RUlang().LANG_CATEGORY_BETTO,
        'carlitto': RUlang().LANG_CATEGORY_CARLITTO,
        'arduino': RUlang().LANG_CATEGORY_ADVANCED,
        'raspberry': RUlang().LANG_CATEGORY_RASPBERRY
    }
};
