#include <stdio.h>

int main(){
    char user[89][100];
    char pass[89][100];

    for(int i=0; i<88;i++){
        printf("Enter User %d: ",i+1);
        scanf("%s",user[i]);
        printf("Enter Pass %d: ",i+1);
        scanf("%s",pass[i]);
    }

    for(int i=0;i<88;i++){
        printf("{username:'%s',password:'%s',email:'%s',name:'John Doe',quizMarks: {C:'NA',Java:'NA', ML:'NA',Cybersecurity:'NA'}},\n",user[i],pass[i],user[i]);
    }
}