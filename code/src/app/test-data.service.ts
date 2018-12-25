import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestDataService implements InMemoryDbService {
  createDb() {
    const personnels = [
      {
        id: 1,
        name: '张三',
        phone: '13112345678',
        status: '有效',
        createTime: '2018-12-21',
        modifyTime: '2018-12-21',
      }, {
        id: 2,
        name: '李四',
        phone: '13112345678',
        status: '有效',
        createTime: '2018-12-21',
        modifyTime: '2018-12-21',
      }
    ];
    const roles = [{
      id: 1,
      code: 'admin',
      name: '管理员',
      status: '有效',
      createTime: '2018-12-21',
      modifyTime: '2018-12-21',
    }, {
      id: 2,
      code: 'test',
      name: '测试人员',
      status: '有效',
      createTime: '2018-12-21',
      modifyTime: '2018-12-21',
    }];
    return { personnels, roles };
  }
}


