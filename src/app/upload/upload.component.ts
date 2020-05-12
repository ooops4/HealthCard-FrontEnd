import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ServiceService } from './service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // constructor(private route:Router, private httpClient:HttpClient) { }
  selectedFiles: FileList;
  currentFileUpload: File;
  // progress: { percentage: number } = { percentage: 0 };
  @Input() filename: string;

  constructor(private uploadService: ServiceService) {
    // this.uploadService.getFiles();
  }

  ngOnInit(){


  }
  
selectFile(event) {
    const file = event.target.files[0];
    this.selectedFiles = event.target.files;
    this.filename = file.name;
    console.log(this.filename);
    console.log(file);
    this.uploadService.serFilename(this.filename);
    // console.log(this.uploadService.getFiles());
  }

// ## HTTP call
  upload() {
  // this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    
  });

  this.selectedFiles = undefined;
}
}
