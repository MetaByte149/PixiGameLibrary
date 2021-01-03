import {Application} from 'pixi.js'; 
import { Scene } from "~scenes/scene";
import { Chess_sprites_factory } from './chess_sprites';
import Bishop from './pieces/Bishop';
import { Piece } from './pieces/chess_piece';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Tower from './pieces/Tower';


export class Game_chess extends Scene {

    sprite_factory:Chess_sprites_factory;
    pieces: Piece[] = [];
    cols = 8;
    rows = 8;
    GRID_SIZE: number;

    public constructor(_app: Application) {
        super(_app);
        this.sprite_factory = new Chess_sprites_factory(this.app);
        this.GRID_SIZE = _app.view.height / this.cols;


        this.CreatePieces();



    }

    CreatePieces(){
        // Creating the chess pieces
        //// BLACK minors
        this.pieces.push(new Tower(this, false, [0, 0]));
        this.pieces.push(new Knight(this, false, [1, 0]));
        this.pieces.push(new Bishop(this, false, [2, 0]));
        this.pieces.push(new Queen(this, false, [3, 0]));
        this.pieces.push(new King(this, false, [4, 0]));
        this.pieces.push(new Bishop(this, false, [5, 0]));
        this.pieces.push(new Knight(this, false, [6, 0]));
        this.pieces.push(new Tower(this, false, [7, 0]));
        // BLACK pawns
        this.pieces.push(new Pawn(this, false, [0, 1]));
        this.pieces.push(new Pawn(this, false, [1, 1]));
        this.pieces.push(new Pawn(this, false, [2, 1]));
        this.pieces.push(new Pawn(this, false, [3, 1]));
        this.pieces.push(new Pawn(this, false, [4, 1]));
        this.pieces.push(new Pawn(this, false, [5, 1]));
        this.pieces.push(new Pawn(this, false, [6, 1]));
        this.pieces.push(new Pawn(this, false, [7, 1]));

        //// BLACK minors
        this.pieces.push(new Tower(this, true, [0, 7]));
        this.pieces.push(new Knight(this, true, [1, 7]));
        this.pieces.push(new Bishop(this, true, [2, 7]));
        this.pieces.push(new Queen(this, true, [3, 7]));
        this.pieces.push(new King(this, true, [4, 7]));
        this.pieces.push(new Bishop(this, true, [5, 7]));
        this.pieces.push(new Knight(this, true, [6, 7]));
        this.pieces.push(new Tower(this, true, [7, 7]));
        // BLACK pawns
        this.pieces.push(new Pawn(this, true, [0, 6]));
        this.pieces.push(new Pawn(this, true, [1, 6]));
        this.pieces.push(new Pawn(this, true, [2, 6]));
        this.pieces.push(new Pawn(this, true, [3, 6]));
        this.pieces.push(new Pawn(this, true, [4, 6]));
        this.pieces.push(new Pawn(this, true, [5, 6]));
        this.pieces.push(new Pawn(this, true, [6, 6]));
        this.pieces.push(new Pawn(this, true, [7, 6]));
    }


    

}