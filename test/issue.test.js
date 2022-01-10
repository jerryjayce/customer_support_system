import chai, {expect} from 'chai';

let persistentData = {};
before(function (done) {
    done();
});

const prefix = 'http://127.0.0.1:9900/issues/create/';

describe('Issue test suite', function () {
    this.timeout(20000);

    it('Should be able to create issue', (done) => {
        let data = {
            "title": "Test complaint 1",
            "description": "Test description 1",
            "user_id": 1
        }
        let path = "create_issue"
        chai
            .request(prefix)
            .post(path)
            .set('Accept', 'application/x-www-form-urlencoded')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(data)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                done();
            });
    });
});
