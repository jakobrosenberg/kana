import hiragana from './hiragana'
import hiraganaDigraphs from './hiragana-digraphs'
import katakana from './katakana'
import katakanaDigraphs from './katakana-digraphs'

export const mono = { hiragana, katakana }
export const di = { hiragana: hiraganaDigraphs, katakana: katakanaDigraphs }