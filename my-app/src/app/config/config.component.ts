import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private configService: ConfigService,
  private http: HttpClient) { }

  getConfig(): void {
    this.configService.getConfig().subscribe(data => console.log(data));
  }

  ngOnInit() {
    console.log("hello world");
    this.getConfig();
  }

}
