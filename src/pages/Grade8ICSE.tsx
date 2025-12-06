import React from 'react';
import { Cpu, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'Programming Basics',
    icon: Cpu,
    description: 'Introduction to logic and algorithms',
    href: '/grade-8/programming',
  },
  {
    title: 'Data Types',
    icon: Database,
    description: 'Variables and constants',
    href: '/grade-8/data-types',
  },
  {
    title: 'Projects',
    icon: Layers,
    description: 'Simple Java programs',
    href: '/grade-8/projects',
  },
];

export default function Grade8ICSE() {
  const content = `
<p></p><p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Scratch <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">EXERCISES<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">(</span><span face="&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;" style="font-size: 14pt; mso-bidi-font-family: &quot;Segoe UI Symbol&quot;; mso-fareast-language: EN-IN;">✔</span><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">)Tick <span style="mso-spacerun: yes;">&nbsp;</span>the correct answers.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1. How many buttons does the New sprite section
have?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. two <span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
three <span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c.four <span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d.five<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2. Which of the following button is used to
increase the size of the Sprite? <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. shrink<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
grow<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. delete<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. duplicate<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3. How many buttons does the New backdrop section
have? <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. two<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
four<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> <span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. three<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. five<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4. Which button runs a script in Scratch?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. Green Flag<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.Red
Stop<span style="mso-tab-count: 1;"> </span>c. shrink<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. delete<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5. The _____block menu contains blue colored blocks
in its list. <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. Sensing<span style="mso-tab-count: 1;">&nbsp;&nbsp; </span>b.
Motion <span style="mso-tab-count: 1;">&nbsp;&nbsp; </span>c. Data <span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. Events<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6. Which of the following block menu performs
mathematical operations?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. Data<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
Pen<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. Operators<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. Events<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">7. Which of the following block menu performs
comparisons?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. Operators<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
Pen<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. Data<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. Motion<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">8. In the Operators block menu the rounded shaped
blocks perform<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. comparisons<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
calculations<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. both a and
b<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp; </span>d. none of these<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">9. Which of the following block menu performs
string operations? <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">a. Data <span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>b.
Pen<span style="mso-tab-count: 2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>c. Operators<span style="mso-tab-count: 1;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>d. Motion<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Answer <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1 – c. four<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2 – b.grow<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3 – b.four<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4 – a. Green flag<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5 – a. sensing<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6 – c. operators<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">7 – a. operators<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">8 – d. none of these<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">9 – c. operators<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">B. Fill in the blanks.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1. You can add a Sprite in a Scratch project using
the _______ of your computer.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2. You can reduce the size of a Sprite using the
_______ button.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3. The blank white area on the stage is called
__________.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4. There are ______ options to add a new backdrop
in a Scratch project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5. The blocks in the _______ block menu can change
the way of executing a<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>script.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6. The blocks in the Operators block menu are
either rectangle, rounded or _______ in shape.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">7. A _____is a sequence of characters that include
letters, numbers, symbols and so on.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">8. A ________ is used to store values in a program.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">9. Some blocks in the _______ block menu are used
to check a condition in a project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">10. The hexagonal shaped blocks in the Operators
block menu displays result in___ or _____<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Answer<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1 – image<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2 – shrink<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3 – backdrop<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4 – four<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5 - events<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6 – hexagonal<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">7 – string<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">8 – variable<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">9 – control<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">10 – true<span style="mso-spacerun: yes;">&nbsp; </span>,
false<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">C. State True (T) or False (F).<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1. A Sprite is present in an area called the stage <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2. There are two methods to add a new Sprite on the
stage.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3. To paint a new Sprite, click on the Upload
sprite from file button.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4. You can add more than one Sprite on the stage.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5. The blank white area on the stage is called
backdrop.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6. The red flag button adds multiple sprites on
stage.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Answer<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1- true<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2 – false<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3 – false<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4 – true<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5 – true<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6 - false<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Answer in one word.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1. Identifies the activity occurring in a project<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2. Performs mathematical operations <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3. Performs string operations<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4. Adds or checks any condition<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5. Adds a new variable<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Answer:<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1- Sensing Block<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2 – rectangle rounded blocks<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3 – operators block menu<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">4 – conditional block<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5 – make a variable button<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">D. Answer the following questions.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">1. Explain the purpose of the Sensing block menu.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Ans) <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The sensing block menu contains blue colored blocks
in its list.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">All the blocks are programmed to identify the activity
that occurs in a project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">It is used to:<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Detect if the sprites are touching each other.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Ask the user a question<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Display the answer<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Detect if a sprite is touching a particular color<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">2. Write a short note on the Operators block menu.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Ans)<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The operator block menu has green colored blocks in
its list.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">These blocks performs mathematical operation in a
scratch project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The blocks are either rectangle rounded or
hexagonal in shape.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">They are placed over other blocks to use them in a
project<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The rectangle rounded blocks perform mathematical
operations<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The hexagonal shaped blocks perform comparisons.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">They display the result either in true or false.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">3. Explain the purpose of using a variable in
programming<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Ans)<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">A variable is used to store values in a program. <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Values can be numbers or strings.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><span style="mso-spacerun: yes;">&nbsp;</span>A numeric
variable can have positive or negative values, whereas a string variable can
have a combination of letters and numbers as values.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">5. What is a Conditional block?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Some blocks of the Control block menu are used to
check a condition in a Scratch project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><span style="mso-spacerun: yes;">&nbsp;</span>These blocks
are called conditional blocks. <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">These blocks will check the condition specified
inside the small hexagonal box of the if section.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><span style="mso-spacerun: yes;">&nbsp;</span>The blocks
placed inside the conditional blocks execute only if the condition is true.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><span style="mso-spacerun: yes;">&nbsp;</span>If the
condition specified inside the if section is false, then the rest of the script
outside the conditional block will be executed.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">6. what is stop block? <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The stop block is a part of the control block menu.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">It has a drop down arrow inside.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">It is used to stop a particular or all the scripts
in a project.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">It also have an option to stop the script of a
specific sprite.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">You can use this block in any project to stop an
action or script.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">7. <span style="mso-spacerun: yes;">&nbsp;</span>What is
the use of touching color block?<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The touching color block under the Sensing block
menu checks whether a Sprite is touching the specified color on the backdrop or
not. <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">The color is specified inside the color box (eye
dropper) of the block. <o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;">Click inside the color box and move the mouse
pointer to the backdrop to specify the color.<o:p></o:p></span></p>

<p class="MsoNoSpacing"><span style="font-family: &quot;Times New Roman&quot;,&quot;serif&quot;; font-size: 14pt; mso-fareast-language: EN-IN;"><o:p>&nbsp;</o:p></span></p><br><p></p>
<div style="clear: both;"></div>
`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Grade 8 ICSE</h1>
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {topics.map((t) => (
            <Link key={t.title} to={t.href} className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <t.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Class Notes & Exercises</h2>
          <div 
            className="prose dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:text-indigo-600 dark:prose-headings:text-indigo-400 prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}