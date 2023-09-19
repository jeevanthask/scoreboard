import { Component } from '@angular/core';
import { ScoremarksService } from 'src/app/services/scoremarks.service';
import openSocket from 'socket.io-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  basicData: any;
  basicOptions: any;
  scoreDetails: any;

  constructor(private scoreService: ScoremarksService) {}

  ngOnInit() {
    this.scoreService.getAllScores().subscribe((res) => {
      this.scoreDetails = res;
      this.displayCharts();
    });
  }

  displayCharts() {
    console.log(this.scoreDetails[0]);

    const socket = openSocket('http://localhost:3000');
    socket.on('posts', (data) => {
      console.log('from backend' + data);
    });

    this.basicData = {
      labels: [
        this.scoreDetails[0].team_name,
        this.scoreDetails[1].team_name,
        this.scoreDetails[2].team_name,
        this.scoreDetails[3].team_name,
      ],
      datasets: [
        {
          label: 'Sales',
          data: [
            this.scoreDetails[0].score,
            this.scoreDetails[1].score,
            this.scoreDetails[2].score,
            this.scoreDetails[3].score,
          ],
          backgroundColor: ['#FFC436', '#337CCF', '#FF3FA4', '#22A699'],
          borderColor: ['#000000', '#000000', '#000000', '#000000'],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#071952',
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#088395',
          },
          grid: {
            color: '#9400FF',
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: '#27005D',
          },
          grid: {
            color: '#337CCF',
            drawBorder: false,
          },
        },
      },
    };
  }
}
