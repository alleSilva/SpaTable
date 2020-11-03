import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit() { 
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 50.76,
                code: 'CBA-1234',
                duration: 120,
                rating: 2.2,
                releaseDate: 'December, 1, 2019',
                description: ''  
            },
            {
                id: 2,
                name: 'Angular: Routes',
                imageUrl: '/assets/images/router.png',
                price: 50.55,
                code: 'XYZ-3521',
                duration: 110,
                rating: 4,
                releaseDate: 'July, 1, 2020',
                description: ''  
            },
            {
                id: 3,
                name: 'Angular: CLI',
                imageUrl: '/assets/images/cli.png',
                price: 50.55,
                code: 'ULW-3210',
                duration: 110,
                rating: 3.5,
                releaseDate: 'September, 13, 2020',
                description: ''  
            },
            {
                id: 4,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 50.55,
                code: 'LLA-8901',
                duration: 110,
                rating: 2.5,
                releaseDate: 'July, 1, 2020',
                description: ''  
            }

        ];

    }

}