import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Mon super titre",
            description: "Ma super description",
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg",
            location: "La Montagne"
        },

        {
            id: 2,
            title: "Mon autre titre",
            description: "Mon autre description",
            createdDate: new Date(),
            snaps: 156,
            imageUrl: "https://images4.alphacoders.com/134/1341419.png",
            location: "La Campagne"
        },

        {
            id: 3,
            title: "Mon dernier titre",
            description: "Ma dernière description",
            createdDate: new Date(),
            snaps: 69,
            imageUrl: "https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M=",
        },

    ];
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }


    getFaceSnapById(faceSnapId:number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
        }
    

        snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}