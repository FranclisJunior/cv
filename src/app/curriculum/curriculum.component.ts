import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  jobs: Array<any> = [];
  academicEducation: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.populateJobs();
    this.populateDynamicCache();
  }

  private populateJobs(): void {
    this.jobs.push(
      {
        id: 0,
        title: 'Senior Software Engineer',
        company: 'PicPay',
        desc: 'Work as senior software engineer and tech leader, responsibilities:\n-Make decisions about architecture, use of APIs and algorithms;\n-Leading development team and review team code;\n-Develop and suggest new features for the system;',
        site: 'https://www.picpay.com/',
        begin: '2021-07-01T23:20:46+00:00',
        end: ''
      },
      {
        id: 1,
        title: 'Specialist Software Engineer',
        company: 'Virtus / HP Inc.',
        desc: 'Work as specialist software engineer and tech leader, responsibilities:\n-Make decisions about architecture, use of APIs and algorithms;\n-Leading development team and review team code;\n-Develop and suggest new features for the system;\n-Maintenance of the infrastructure on AWS;\n-Manage the CI and CD tasks on Jenkins/Gitlab CI ',
        site: 'https://www.virtus.ufcg.edu.br',
        begin: '2016-04-01T23:20:46+00:00',
        end: '2021-06-30T23:20:46+00:00'
      },
      {
        id: 2,
        title: 'Software Engineer (Part-time)',
        company: 'ShowKase',
        desc: 'Work as software engineer(remote and part time), responsibilities:\n-Make decisions about architecture, use of APIs and algorithms;\n-Develop and suggest new features for the system;\n',
        site: 'https://www.showkase.com.br',
        begin: '2019-04-01T23:20:46+00:00',
        end: ''
      },
      {
        id: 3,
        title: 'Full Stack Developer (Part-time)',
        company: 'ShowKase',
        desc: 'Worked as full stack developer (remote and part time), responsible for development of RESTFul web applications of company.',
        site: 'https://mcontigo.com',
        begin: '2016-06-01T23:20:46+00:00',
        end: '2017-05-01T23:20:46+00:00'
      },
      {
        id: 4,
        title: 'Software Developer',
        company: 'Embedded System Lab - UFCG',
        desc: 'Worked as mobile developer (Android), producing applications for ASUS Brazil',
        site: 'http://www.embeddedlab.org',
        begin: '2015-04-01T23:20:46+00:00',
        end: '2016-03-31T23:20:46+00:00'
      },
      {
        id: 5,
        title: 'Software Developer and Researcher',
        company: 'Lavid',
        desc: 'Was part of the VLibras project (http://www.vlibras.gov.br/), developed by UFPB in partnership with RNP. Worked mostly with JavaScript, Angular JS, HTML5, CSS3 and Bootstrap.',
        site: 'http://lavid.ufpb.br',
        begin: '2014-10-01T23:20:46+00:00',
        end: '2015-03-31T23:20:46+00:00'
      },
      {
        id: 6,
        title: 'Tutor',
        company: 'UFPB Virtual',
        desc: 'Was tutor at UFPB-Virtual, participating in the project ProTic(Training for Public Employees in Process Improvement and Management through the use of ICTs)',
        site: 'http://www.ufpb.br',
        begin: '2014-04-01T23:20:46+00:00',
        end: '2015-09-31T23:20:46+00:00'
      }
    );


    this.academicEducation.push(
      {
        id: 1,
        title: 'Postgraduate in Distributed Software Architecture',
        institution: 'PUC Minas - Pontifícia Universidade Católica de Minas Gerais',
        begin: '2021-04-01T23:20:46+00:00',
        end: '2022-05-01T23:20:46+00:00'
      },
      {
        id: 2,
        title: 'Bachelor in Information Systems',
        institution: 'UFPB - Federal University of Paraiba',
        begin: '2011-08-11T23:20:46+00:00',
        end: '2015-09-01T23:20:46+00:00'
      }
    );
  }


  private populateDynamicCache() {
    const jobs = this.jobs;
    const education = this.academicEducation;
    if('caches' in window) {
      caches.delete('cv-app-dynamic').then(() => {
          const  files = ['https://secure.gravatar.com/avatar/586d7f63f6d4c907f10c8c6aec9f1afb?size=400px'];
          caches.open('cv-app-dynamic').then((cache) => {
            cache.addAll(files).then(() => {
              console.log("Cache dinâmico realizado com sucesso!");
            });
          });
      });

    }
  }

}
