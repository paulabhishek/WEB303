/*
    Assignment 5
    {Abhishek Paul}
*/

$(document).ready(function(){
    class ContentCard{
        id;
        title;
        description;
        categoryType;

        constructor(id, title, description, categoryType){
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryType = categoryType;
            //console.log(id);
        }

        updateContent(id, title, description, categoryType){
            if(id !== null || title !== null || description !== null || categoryType !== null){
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryType = categoryType;                
            }
        }

    }
    let movies = ['0','Eternals', 'The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth ', 'Adventure/Action',
                   '1','Dune','Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding', 'Sci-fi/Adventure',
                   '2','No Time To Die','James Bond is enjoying a tranquil life in Jamaica after leaving active service.', 'Action/Adventure',
                   '3','Last Night in Soho','An aspiring fashion designer is mysteriously able to enter the 1960s', 'Horror/Psychological horror',
                   '4', 'Halloween Kills', 'The nightmare is not over as unstoppable killer Michael Myers escapes from Laurie Strodes trap', 'Horror/Thriller'
                ];
     console.log(movies.length);    
    let content0 = new ContentCard(movies[0], movies[1], movies[2], movies[3]);
    let contentList = document.getElementById('content-list');

    let wrapper = document.createElement('div');
    wrapper.setAttribute("id", "content-"+ content0.id);

    let header = document.createElement('h4');
    header.textContent = content0.title;

    let p = document.createElement('p');
    p.textContent = content0.description;

    let div = document.createElement('div');
    div.textContent = content0.categoryType;

    wrapper.append(header);
    wrapper.append(p);
    wrapper.append(div);
    contentList.append(wrapper);

    let temp = 4;
    for (let i = 4; i < movies.length-4; i++) {
    
    content0.updateContent(movies[temp], movies[temp+1], movies[temp+2], movies[temp+3]);
    temp = temp + 4;
    //console.log(temp);
    let contentList = document.getElementById('content-list');

    let wrapper = document.createElement('div');
    wrapper.setAttribute("id", "content-"+ content0.id);

    let header = document.createElement('h4');
    header.textContent = content0.title;

    let p = document.createElement('p');
    p.textContent = content0.description;
    //console.log(content.description);

    let div = document.createElement('div');
    div.textContent = content0.categoryType;

    wrapper.append(header);
    wrapper.append(p);
    wrapper.append(div);
    contentList.append(wrapper);
    }
});    



