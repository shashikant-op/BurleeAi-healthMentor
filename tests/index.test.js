const axios = require("axios");

const backendurl="http://localhost:3000";


// Test cases for Authenticating the user 
describe("Authentication",()=>{
    test("user Signup ",async()=>{
        const username = `shahsikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        password = "shashikant";
      const reponse = await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        })
        expect(Response.status).toBe(201);

    });

    test("user signup fail with undefine username",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const Response = await axios.post(`${backendurl}/api/signup`,{
            email,
            password
        })
        expect(Response.status).toBe(400);
    });
    
    test("user signup fail with emty password",async()=>{
        const username=`shashikant-${Math.random()}`;
         const email = `${username}@gmail.com`;
        const password = "shashikant";
        const response = await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email
        })
        expect(response.status).toBe(400);
    })
    test("user signup fail with emty emial",async()=>{
        const username=`shashikant-${Math.random()}`;
         const email = `${username}@gmail.com`;
        const password = "shashikant";
        const response = await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            password
        })
        expect(response.status).toBe(400);
    })

    //signup test for the trainer
    test("trainer Signup ",async()=>{
        const username = `shahsikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        password = "shashikant";
      const reponse = await axios.post(`${backendurl}/api/v1/trainer/signup`,{
            username,
            email,
            password
        })
        expect(Response.status).toBe(201);

    });

    test("trainer signup fail with undefine username",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const Response = await axios.post(`${backendurl}/api/trainer/signup`,{
            email,
            password
        })
        expect(Response.status).toBe(400);
    });
    
    test("trainer signup fail with emty password",async()=>{
        const username=`shashikant-${Math.random()}`;
         const email = `${username}@gmail.com`;
        const password = "shashikant";
        const response = await axios.post(`${backendurl}/api/v1/trainer/signup`,{
            username,
            email
        })
        expect(response.status).toBe(400);
    })
    test("trainer signup fail with emty emial",async()=>{
        const username=`shashikant-${Math.random()}`;
         const email = `${username}@gmail.com`;
        const password = "shashikant";
        const response = await axios.post(`${backendurl}/api/v1/trainer/signup`,{
            username,
            password
        })
        expect(response.status).toBe(400);
    })

    //user sign in test
    test("user sigin",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/signin`,{
                email,
                password
            })
            expect(response.status).toBe(200);
            expect(response.body.tokens).toBeDefined();
    })

    test("user signin without email and password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/signin`,{
                password
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

     test("user signin without email and password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/signin`,{
                email
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

     test("user sigin failed using wrong email",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const wrongemail = `${username}23@gmail.com`;
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/signin`,{
                wrongemail,
                password
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })
    
     test("user signin failed using wrong password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const wrongpassword = "shashikant12"
        const wrongemail = `${username}23@gmail.com`;
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/signin`,{
                email,
                wrongpassword
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

    //trainer login tests
    test("trainer sigin",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/trainer/signin`,{
                email,
                password
            })
            expect(response.status).toBe(200);
            expect(response.body.tokens).toBeDefined();
    })

    test("trainer signin without email and password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/trainer/signin`,{
                password
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

     test("trainer signin without email and password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/trainer/signin`,{
                email
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

     test("trainer sigin failed using wrong email",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const wrongemail = `${username}23@gmail.com`;
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/trainer/signin`,{
                wrongemail,
                password
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })
    
     test("traiener signin failed using wrong password",async()=>{
        const username=`shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password="shashikant";
        const wrongpassword = "shashikant12"
        const wrongemail = `${username}23@gmail.com`;
            await axios.post(`${backendurl}/api/v1/signup`,{
                email,
                username,
                password
            })

            const response = await axios.post(`${backendurl}/api/v1/trainer/signin`,{
                email,
                wrongpassword
            })
            expect(response.status).toBe(400);
            expect(response.body.tokens).toBeUndefined();
    })

    //Logout user
    test("user logout ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";

        await axios.post(`${backendurl}/api/v1/signup`,{
            email,
            username,
            password
        })
        const signinresponse = await axios.post(`${backendurl}/api/v1/signin`);
        const tokens = signinresponse.body.tokens;
        const refreshtoken = tokens.refreshToken;

        const response = await axios.post(`${backendurl}/api/v1/auth/logout`,{
            refreshtoken
        });

        expect(response.status).toBe(200);
    })
    test("user want to logout without token ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";

        await axios.post(`${backendurl}/api/v1/signup`,{
            email,
            username,
            password
        })
        const signinresponse = await axios.post(`${backendurl}/api/v1/signin`);
        const token = signinresponse.body.tokens;

        const response = await axios.post(`${backendurl}/api/v1/auth/logout`,{
           
        });

        expect(response.status).toBe(400);
    });

    //trainer logout
    test("trainer logout ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";

        await axios.post(`${backendurl}/api/v1/trainer/signup`,{
            email,
            username,
            password
        })
        const signinresponse = await axios.post(`${backendurl}/api/v1/trainer/signin`);
        const tokens = signinresponse.body.tokens;
        const refreshtoken = tokens.refreshToken;

        const response = await axios.post(`${backendurl}/api/v1/auth/trainer/logout`,{
            refreshtoken
        });

        expect(response.status).toBe(200);
    })
    test("trainer want to logout without token ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";

        await axios.post(`${backendurl}/api/v1/trainer/signup`,{
            email,
            username,
            password
        })
        const signinresponse = await axios.post(`${backendurl}/api/v1/trainer/signin`);
        const token = signinresponse.body.tokens;

        const response = await axios.post(`${backendurl}/api/v1/auth/trainer/logout`,{
           
        });

        expect(response.status).toBe(400);
    });
})

//Test cases for getting the user information
describe("user details",()=>{
    test("get userinformation through their id ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const password = "shashikant";
        const email = `${username}@gmail.com`;

        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        })
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const id = signinresponse.body.user.id;

       const response = await axios.get(`${backendurl}/api/v1/user/${id}`);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(`${username}`);
        expect(response.body.id).toBe(`${id}`);
    })

    test("user cannot get adetails with wrong id ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const password = "shashikant";
        const email = `${username}@gmail.com`;
        const wrongid = "23sdjfo405jdfkjadsf4";

        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        })
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const id = signinresponse.body.user.id;

       const response = await axios.get(`${backendurl}/api/v1/user/${wrongid}`);
        expect(response.status).toBe(404);
        expect(response.body.name).toBeUndefined();
    })
   
    test("user update the data thorugh id",async()=>{
            const username = `shashikant-${Math.random()}`;
            const email = `${username}@gmail.com`;
            const password = "shashikant";
            await axios.post(`${backendurl}/api/v1/signup`,{
                username,
                email,
                password
            })

           const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
                email,
                password
            })
            const id = signinresponse.user.id;
           
            const response = await axios.put(`${backendurl}/api/v1/${id}`,{
                            "age": 26,
                            "height": 176,
                            "weight": 72,
                            "gender": "male",
                            "goals": {
                                "targetWeight": 68,
                                "dailyCalories": 2200,
                                "weeklyWorkouts": 5
                            }
            });

            expect(response.status).toBe(200);
            expect(response.body.updatedProfile).toBeDefined();

    })

    //deleting the user may be writen in future

})

//test cases for th workout controller


//there is a confusion with the getting the user workout daily or weekly
describe("workout controller",()=>{

    //workout ai-genrate
    test("workout generate by ai",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;

        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
             userid,
            "goals": "muscle_gain",
            "preferences": ["yoga", "weight_training"],
            "duration": 45
        });
        expect(response.status).toBe(200);
        except(response.body).toBeDefined();
        expect(response.body.workoutPlan).toBeDefined();
        
    });

    test("workout generate by ai failed because of missing filed (goal missing)",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;

        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
             userid,
            "preferences": ["yoga", "weight_training"],
            "duration": 45
        });
        expect(response.status).toBe(400);
        
    })
    
    test("workout generate by ai failed because of missing field (preferences)",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;

        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
             userid,
             "goals": "muscle_gain",
            "duration": 45
        });
        expect(response.status).toBe(400);
        
    })
     test("workout generate by ai failed because of missing field (missing duration)",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;

        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
             userid,
            "goals": "muscle_gain",
            "preferences": ["yoga", "weight_training"]
        });
        expect(response.status).toBe(400);
        
    })
     test("workout generate by ai failed because of missing field (missing id)",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;

        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
                "goals": "muscle_gain",
                "preferences": ["yoga", "weight_training"],
                "duration": 45
        });
        expect(response.status).toBe(400);
        
    })
       test("workout generate by ai failed unauthrize user",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,{
            email,
            password
        })
        const userid = signinresponse.body.user.id;
        const wronguserid = "asldkfjlksdjf34kdjf1234";
        const response = await axios.post(`${backendurl}/api/v1/workout/ai-genrate`,{
                wronguserid,
            "goals": "muscle_gain",
                "preferences": ["yoga", "weight_training"],
                "duration": 45
        });
        expect(response.status).toBe(401);
        
    })
    //workout custom
    test("custom workout created by trainer",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;

          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const response = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            userid,
            trainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        expect(response.status).toBe(201);
        expect(response.body.planId).toBeDefined();


    })
    test("workout custom not create by the trainer (missing userid)",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;

          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const response = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            
            trainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        expect(response.status).toBe(400);
        expect(response.body.planId).toBeUndefined();


    })
        test("workout custom not create by the trainer (wrong userid)",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;
        const wronguserid = "alkdjflkasjdf3445";
          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const response = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            wronguserid,
            trainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        expect(response.status).toBe(403);
        expect(response.body.planId).toBeUndefined();


    })
     test("workout custom not create by the trainer (wrong tarinerid)",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;
        const wrongtrainerid = "alkdjflkasjdf3445";
          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const response = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            wronguserid,
            wrongtrainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        expect(response.status).toBe(403);
        expect(response.body.planId).toBeUndefined();


    })
    test("workout custom not create by the trainer (wrong tarinerid)",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;
        const wrongtrainerid = "alkdjflkasjdf3445";
          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const response = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            wronguserid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        expect(response.status).toBe(403);
        expect(response.body.planId).toBeUndefined();


    })

    //update workout

    test("updating status of the workout",async()=>{

        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";
        
        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;
        const response = await axios.put(`${backendurl}/api/v1/workout/${userid}`, {
                "status": "completed",
                "completedAt": "2025-08-10T10:30:00Z"
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBeDefined();
    })
    
    test("updating status failed with wrong userid",async()=>{

        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";
        
        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;
        const wronguserid = "jlasdjflj3243534";
        const response = await axios.put(`${backendurl}/api/v1/workout/${wronguserid}`,
            {
                 "status": "completed",
                 "completedAt": "2025-08-10T10:30:00Z"
            }
        );
        expect(response.status).toBe(400);
        expect(response.body.message).toBeUndefined();
    })

    //get wrokout history

    test("getting all workout history of user",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;

          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

    const workoutresponse = await axios.post(`${backendurl}/api/v1/workout/custom`,{
            userid,
            trainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        const planId = workoutresponse.body.planId;

        const response = await axios.post(`${backendurl}/api/v1/workout/${userid}`);

        expect(response.status).toBe(200);
        except(response.body.workoutHistory).toBeDefined();

       


    })

    test("No workout history found for this user",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;

          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;
        const wronguserid = "alskdjf3344d";
        const response = await axios.post(`${backendurl}/api/v1/workout/${wronguserid}`);

        expect(response.status).toBe(404);

       


    })
    test("not getting workout history due to missing or wrong user id",async()=>{
        const usename = `shashikant-${Math.random()}`;
        const email = `${usename}@gmail.com`;
        const password = "shashikant";

        const tusename = `shashikant${Math.random()}`;
        const temail = `${tusename}@gmail.com`;
        const tpassword = "shashikant";

        await axios.post(`${backendurl}/api/v1/auth/signup`,{
            email,
            usename,
            password
        })
       const usersigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            email,
            password
        })
        const userid = usersigninresponse.body.user.id;

          await axios.post(`${backendurl}/api/v1/auth/trainer/signup`,{
            temail,
            tusename,
            tpassword
        })
       const trainerigninresponse = await axios.post(`${backendurl}/api/v1/auth/signin`,{
            temail,
            tpassword
        })
        const trainerid = trainerigninresponse.body.user.id;

     await axios.post(`${backendurl}/api/v1/workout/custom`,{
            userid,
            trainerid,
             "customPlan": [
                                { "day": 1, "exercises": ["Bench Press", "Deadlift"], "duration": "60 min" },
                                { "day": 2, "exercises": ["Running", "Stretching"], "duration": "40 min" }
                            ]
        })

        const wronguserid = "alskdjf3344d";
        const response = await axios.post(`${backendurl}/api/v1/workout/${wronguserid}`);

        expect(response.status).toBe(403);
        except(response.body.workoutHistory).toBeUndefined();

       


    })

    //**Purpose:** Update workout status (completed/skipped/in-progress).
    // PUT /workout/:id 

    //confiusion aout that it id should be day paln or workout 
   
})

//Nutrition / Diet planner
describe("Diet controller",()=>{
    test("diet ai-generate ",async()=>{
        const username = `shashikant-${Math.random()}`;
        const email = `${username}@gmail.com`;
        const password = "shashikant";
        await axios.post(`${backendurl}/api/v1/signup`,{
            username,
            email,
            password
        });
       const signinresponse = await axios.post(`${backendurl}/api/v1/signin`,)
        const userid = signinresponse.body.user.id;
        const response = await axios.post(`${backendurl}/api/v1/diet/ai-generate`,{
            "userId": "12345",
            "goals": "muscle_gain",
            "dietaryPreferences": ["vegetarian", "low_carb"],
            "allergies": ["peanuts"],
            "dailyCaloriesTarget": 2200
          }
          
          );
          expect(response.status).toBe(200);
          expect(response.body.message).toBeDefined();
    })
    
})




