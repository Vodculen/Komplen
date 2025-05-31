// Looks good just make it look good in the website

export const creatingStructProgram = 
`struct GRADE {
    int persentage;
    char letter;
};`;

export const standaredStructProgram = `#include <stdio.h>
struct GRADE {
    int persentage;
    char letter;
};

int main() {
    struct GRADE grade;

    grade.persentage = 95;
    grade.letter = 'A';

    printf("Current Persentage: %d\\n", grade.persentage);
    printf("Current Letter: %c\\n", grade.letter);

    return 0;
}`;

export const typedefStructProgram = `#include <stdlib.h>

typedef struct {
    int persentage;
    char letter;
} GRADE;

int main() {
    GRADE grade;

    grade.persentage = 95;
    grade.letter = 'A';

    printf("Current Perentage: %d\\n", grade.persentage);
    printf("Current Letter: %c\\n", grade.letter); // Hello World

    return 0;
}`;

export const stringStructProgram = `#include <stdlib.h>

typedef struct {
    char myPet[20];
} PETS;

int main() {
    PETS pet;

    strcpy(pet.myPet, "cats!");

    printf("I like %s\\n", pet.myPet);

    return 0;
}`;

export const simpleStructProgram = `#include <stdlib.h>

struct GRADE {
    int presentage;
    char letter;
    char note[50];
};

int main() {
    struct GRADE grade = { 95, 'A', "Great job!" };

    printf("Current Perentage: %d\\n", grade.presentage);
    printf("Current Letter: %c\\n", grade.letter);
    printf("Note: %s\\n", grade.note);

    return 0;
}`;
