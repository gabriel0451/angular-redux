import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShellService {
  menus = [{
    name: '权限管理',
    href: '',
    icon: 'security-scan',
    children: [{
      name: '人员管理',
      href: '/manage/security/personnel',
      icon: 'user',
      children: []
    }, {
      name: '角色管理',
      href: '/manage/security/role',
      icon: 'team',
      children: []
    }]
  }];

  getTestDataByName(name: string): Observable<any> {
    const url = '/api/' + name;
    return this.httpClient.get(url);
  }

  constructor(private httpClient: HttpClient) { }
}
