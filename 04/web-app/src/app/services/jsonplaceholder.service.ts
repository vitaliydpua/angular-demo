import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';



@Injectable()
export class JsonPlaceholderService {
    constructor(private httpClient: HttpClient) {

    }
    getPosts() : Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts`);
    }
}