---
title: "PENG9570 Lecture 1"
aliases:
  - "Lecture 1"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# Welcome to PENG9570

**Applied Mathematical Modelling and Analysis**
Leiv Øyehaug — OsloMet (Oslo Metropolitan University)

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img01.jpg)

## Practical information

- **Lecturers:** Leiv Øyehaug (course responsible) and Sølve Selstø
- **Course plan:** https://student.oslomet.no/studier/studieinfo/emne/PENG9570/2025/HØST



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img02.jpg)

### Teaching sessions

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img03.jpg)

Uke 10, 2026:

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img04.jpg)

| Time | Mon 9/3 | Tue 10/3 | Wed 11/3 | Thu 12/3 | Fri 13/3 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 08:00–10:00 | | Practical information; project | Lecture 08:30–10:15, Rom P35 PI243 (L. Øyehaug) | Lecture 08:30–12:15, Rom P35 U1007 (L. Øyehaug) | Lecture 08:30–12:15, Rom P35 PI243 (L. Øyehaug) |

### Project and exam



- **Project:**
  - As much of the syllabus as possible should be applied in the project (e.g. modelling, analysis, numerical solution)
  - Deadline for project report submission: **June 1st**
  - Report has to be approved for the candidate to take the exam
- **Oral exam:**
  - Presentation of project, including questions
  - Questions from the syllabus
  - Pass / no pass (Pass $\geq$ B!)
  - **June 15th**

### Canvas

- Canvas page for the course: https://oslomet.instructure.com/courses/33405
- All course material will be made available here

### Literature



- **HJ Ricardo [HJR]:** *A Modern Introduction to Differential Equations*, 3rd ed. (chapters 1–3, 6, 7):
  https://www.sciencedirect.com/book/monograph/9780128234174/a-modern-introduction-to-differential-equations
- Compendiums (homemade, see Canvas)
- **Morten Hjorth-Jensen:** *Computational Physics* (with permission, link in Canvas)
- Lecture notes

### About me

- Leiv Øyehaug
- Associate professor of applied mathematics, Department of Computer Science
- Background mainly in modelling biological systems
- E-mail: leiv.oyehaug@oslomet.no
- Office: P35-PS234

## Main topics of the course



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img05.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img06.jpg)

### Analysis of ODEs — Lectures 1 & 2



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img07.jpg)

### Analysis of ODE systems — Lectures 2 & 3

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img08.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img09.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img10.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img11.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img12.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img13.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img14.jpg)

### Numerical methods for ODEs — Lectures 3 & 4



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img15.jpg)

### Introduction to PDEs — Lecture 4

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img16.jpg)

### Numerical methods for PDEs — Lectures 5 & 6



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img17.jpg)

### Numerical methods for quantum physics — Lecture 7

$$
i \hbar \frac{\partial}{\partial t}|\Psi\rangle = \hat{H}|\Psi\rangle
$$

## Summary

### What is an ordinary differential equation (ODE) and what is an initial value problem?

An ordinary differential equation is an equation that relates a function $y$, its derivatives $y^{\prime}, y^{\prime \prime}, \ldots$ and an independent variable (in this case $t$):

$$
F\left(t, y, y^{\prime}, \ldots, y^{(n)}\right)=0
$$

An initial value problem consists of a differential equation plus initial values for $y$ and, possibly, one or more of its derivatives. Example:

$$
y^{\prime}=-y, \quad y(0)=1
$$

### What is the steady state (critical point / equilibrium) of a first order ODE?

- In one-variable models $u^{\prime}=f(u)$, the steady state $u^{*}$ is where the derivative is zero: $f\left(u^{*}\right)=0$
- In two-variable models $x^{\prime}=P(x, y),\ y^{\prime}=Q(x, y)$, the steady state $\left(x^{*}, y^{*}\right)$ is where both derivatives are zero: $P\left(x^{*}, y^{*}\right)=0$ and $Q\left(x^{*}, y^{*}\right)=0$

### What does it mean that a steady state $u^{*}$ is (i) stable, (ii) asymptotically stable, and (iii) unstable?

- Stable: small perturbation from $u^{*}$ means that solution stays near $u^{*}$ for all time
- Unstable: small perturbation from $u^{*}$ leads to solution escaping from $u^{*}$
- Asymptotically stable: a solution that starts near enough to $u^{*}$ will converge to $u^{*}$ as $t \rightarrow \infty$

### How are phase line plots used to provide insights into the dynamics of the solution?

$$
u^{\prime}=f(u)
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img18.jpg)

## Where do we find mathematical models?

### Fluid dynamics



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img19.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img20.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img21.jpg)

## Climate modelling

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img22.jpg)

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img23.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img24.jpg)

## Modelling covid and other infectious diseases



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img25.jpg)

$$
\begin{aligned}
& \frac{d s}{d t}=-\beta s i, \\
& \frac{d i}{d t}=\beta s i-\gamma i, \\
& \frac{d r}{d t}=\gamma i .
\end{aligned}
$$

$$
R_{0}=\frac{\text { infection rate }}{\text { recovery rate }}=\frac{\beta s i}{\gamma i}=\frac{\beta s}{\gamma} \approx \frac{\beta}{\gamma}
$$

Source: https://www.fhi.no/en/id/infectious-diseases/coronavirus/coronavirus-modelling-at-the-niph-fhi/

### Physics engines for realistic physics in computer games

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img26.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img27.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img28.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img29.jpg)

## Alan M. Turing (1912-1954)



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img30.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img31.jpg)

Enigma:

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img32.jpg)

- Pioneer in computer science
- Developed a theory for biological pattern formation:

$$
\begin{aligned}
u_{t} &= u_{x x}+f(u, v), \\
v_{t} &= d\, v_{x x}+\underbrace{g(u, v)}_{\text {Diffusion }} .
\end{aligned}
$$

## Pigment patterns in zebra fish: experiment and simulation

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img33.jpg)

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img34.jpg)
Kondo & Miura, *Science*, **329**, 2010. Showing laser ablation of pigment cells, migration of new cells, and a comparison of experiment with simulation.

## Mathematical models in drug design



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img35.jpg)

*Mathematical Modelling to Guide Drug Development for Malaria Elimination* — Hannah C. Slater, Lucy C. Okell, and Azra C. Ghani.

## Data science, machine learning and AI

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img36.jpg)

- Linear algebra
- Optimization
- Statistics and probability



## Why do we need mathematical models?

- To develop scientific understanding
  - e.g. hypothesis testing using the model as a testbed or laboratory
- To predict outcomes of experiments
  - e.g. perform experiments *in silico* to reduce costs and alleviate the need for animal experiments
- To test the effect of changes in a system
  - e.g. test the effect on model output of injecting a certain substance into the cell
- To estimate parameters in a system
  - e.g. estimate parameter values by tuning them until the best fit between model output and empirical data is reached



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img37.jpg)

- To aid in decision making
  - e.g. describe various possible military scenarios using modelling and simulation. Generals may base their decisions on model outputs.

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img38.jpg)

## Different types of mathematical models

## Types of models: Mechanistic vs empirical



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img39.jpg)

- A mechanistic model uses available theoretical information, an empirical model does not
- The empirical model accounts quantitatively for changes associated with different conditions

6-1 Introduction To Empirical Models
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img40.jpg)

Figure 6-1 Scatter diagram of the salt concentration in surface streams and roadway area data in Table 6-1.

## Types of models: Deterministic vs stochastic models

- Deterministic models ignore random variation
- Stochastic models account for randomness that often occurs in nature



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img41.jpg)

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img42.jpg)

## Types of models: Dynamic vs static

- A dynamic model accounts for the system's time-dependence
- A static model describes the state of the system in equilibrium

## Types of models: Black box vs white box

- White box models are transparent, we know the details of the model and how the model produces predictions
- Black box models produce output that we can observe, but without knowing how it is produced
- (analogous to black box vs white box software)



## The modelling cycle

1. Describe the real-world model
2. Formulate the mathematical model
3. Calculate the solution of the model
4. Interpret the solution
5. Validate the model against real-world observations

Note: Progress is not necessarily sequential, and several iterations might be needed.



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img43.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img44.jpg)

### Compromises in mathematical modelling: how «good» should it be?

- First level of compromise: identify the most important parts of the system, include these in the model and exclude the rest.
  - Which parts are most important depends on the questions one wants to answer.
  - Examples:
    - Modelling a stone falling from a low height — air resistance can be justifiably neglected
    - Modelling a parachute — air resistance is of course crucial
- Second level of compromise: complexity of mathematical expressions.
  - Occam's razor: the simplest mathematical expression is the best, since it requires the fewest assumptions (as long as the model maintains its realism).

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img45.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img46.jpg)

## Some examples of models

## Second order differential equations

$$
a y^{\prime \prime}+b y^{\prime}+c y=f(t) .
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img47.jpg)

Newton's 2nd law gives:

$$
m x^{\prime \prime}+b x^{\prime}+k x=F(t) .
$$

Kirchhoff's law gives:

$$
L Q^{\prime \prime}+R Q^{\prime}+\frac{1}{C} Q=V(t) .
$$

## Resonance in second order differential equations

$$
a=c=1, b=0, f(t)=\cos \omega_{0} t:
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img48.jpg)

## Population dynamics: the logistic equation

$$
p^{\prime}=r p(1-p / K),
$$

Steady states: $p=0,\ p=K$.

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img49.jpg)

$$
p(t)=\frac{p_{0} K}{p_{0}+\left(K-p_{0}\right) e^{-r t}} ,
$$

## Population dynamics: predator–prey interactions



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img50.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img51.jpg)

$$
\begin{aligned}
x^{\prime} & =a x-b x y, \\
y^{\prime} & =c x y-d y,
\end{aligned}
$$

Steady states: $\left(x^{*}, y^{*}\right)=(0,0)$ and $\left(x^{*}, y^{*}\right)=\left(\frac{d}{c}, \frac{a}{b}\right)$.

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img52.jpg)
Alan L. Hodgkin

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img53.jpg)
Andrew Huxley

## Mathematical modelling in physiology

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img54.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img55.jpg)

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img56.jpg)
Denis Noble

## The Hodgkin–Huxley model



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img57.jpg)

Gating $\Rightarrow$ conductances of K- and Na-channels depend on $V$ $\Rightarrow$ interesting dynamics.

Information flow through neurons:

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img58.jpg)

## The Hodgkin–Huxley model

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img59.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img60.jpg)

## Differential equations

### Why consider differential equations?



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img61.jpg)

Describes dynamics in terms of rate of change.

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img62.jpg)

### «Solvable» ODEs

Linear and homogeneous first order ODEs:

$$
a y^{\prime}+b y=0
$$

Separable ODEs:

$$
f(y) y^{\prime}=g(t)
$$

First order general linear ODEs:



$$
y^{\prime}+p(x) y=q(x)
$$

Second order linear ODEs with constant coefficients:

$$
a y^{\prime \prime}+b y^{\prime}+c y=f(x)
$$

## Problems

- Solve the ODEs:
  - $y^{\prime}=y x^{2}$
  - $\left(1+x^{2}\right) y^{\prime}+y^{2}=0$
  - $y^{\prime}+2 y=1$
- Solve the initial value problems:
  - $y^{\prime}=x \sqrt{y}, \ y(2)=4$
  - $y^{\prime}+x y=0, \ y(0)=1$



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img63.jpg)

### Worked example: $y^{\prime}+2y=1$

This is a linear, first-order, inhomogeneous ODE with constant coefficients.

**General solution:**

$$
y = y_{H} + y_{P}
$$

where $y_{H}$ is the general solution of the corresponding homogeneous ODE and $y_{P}$ is a particular solution.

$y_{H}$ is the general solution of:

$$
\begin{aligned}
y^{\prime}+2 y & =0 \\
\Leftrightarrow \quad y^{\prime} & =-2 y \\
\Leftrightarrow \quad y_{H} & =C e^{-2 t}
\end{aligned}
$$

$y_{P}$ is a particular solution of $y^{\prime}+2y=1$. We observe that $y_{P}=\frac{1}{2}$ is a particular solution. Therefore:

$$
y = y_{H} + y_{P} = C e^{-2 t}+\frac{1}{2}
$$

### Worked example: $y^{\prime}=x \sqrt{y}, \ y(2)=4$

This is an **initial value problem (IVP)**: the ODE $y^{\prime}=x\sqrt{y}$ plus the initial condition $y(2)=4$. The ODE is separable:

$$
y^{\prime}=x \sqrt{y} \Leftrightarrow \frac{1}{\sqrt{y}} y^{\prime}=x
$$

Integrating:



$$
\int \frac{1}{\sqrt{y}}\, dy = \int x\, dx
\quad\Rightarrow\quad
2 \sqrt{y} = \frac{1}{2} x^{2}+C_{1}
\quad\Rightarrow\quad
\sqrt{y} = \frac{1}{4} x^{2}+C
$$

$$
\Rightarrow \quad y = \left(\frac{1}{4} x^{2}+C\right)^{2} \quad \text{(general solution)}
$$

Applying $y(2)=4$:

$$
\begin{aligned}
& \Big(\underbrace{\tfrac{1}{4} \cdot 2^{2}}_{=1}+C\Big)^{2}=4 \\
& (1+C)^{2}=4 \\
& C=1 \text { and } C=-3
\end{aligned}
$$

Two solutions:

$$
\begin{aligned}
& y=\left(\frac{1}{4} x^{2}+1\right)^{2} \\
& y=\left(\frac{1}{4} x^{2}-3\right)^{2}
\end{aligned}
$$

## Slope fields

### Slope field (direction field)

- Differential equation: $y^{\prime}=F(x, y)$
- The derivative $y^{\prime}$ is the slope of the tangent of the solution curve
- A slope field is defined by the magnitude of the derivatives, indicated by short straight lines
- An ODE has (most often) infinitely many solutions



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img64.jpg)

### The initial value problem



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img65.jpg)

Normally one solution per initial value. (Shown: solution with initial condition $y(0)=0.2$.)

### Slope fields, examples

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img66.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img67.jpg)



![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img68.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img69.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img70.jpg)

### Slope fields, problem

- Sketch the slope field of the ODE

$$
y^{\prime}=y / x
$$

(calculate $y^{\prime}$ for a number of points in the coordinate system)
- What kind of solutions do we have?

![](/PENG9570/Lecture-Notes/attachments/Lecture1/L1_img71.jpg)

#### Solving $y^{\prime}=y/x$

**As a separable ODE:**

$$



\begin{gathered}
\frac{1}{y} y^{\prime}=\frac{1}{x} \\
\int \frac{1}{y} d y=\int \frac{1}{x}\, dx \\
\ln |y|=\ln |x|+C \\
|y|=K_{1}|x|
\end{gathered}
$$

With $K= \pm K_{1}$, the **general solution** is $y = Kx$.

**Using the integrating factor:**

$$
y^{\prime}=\frac{y}{x} \Leftrightarrow y^{\prime}-\frac{1}{x} y=0
$$

$$
\text{Integrating factor} = e^{-\int \frac{1}{x} d x}=e^{-\ln |x|}=\left(e^{\ln |x|}\right)^{-1}=|x|^{-1}
$$

Assume $x>0$:

$$
\frac{1}{x} y^{\prime}-\frac{1}{x^{2}} y=0
\Leftrightarrow \left(\frac{1}{x} y\right)^{\prime}=0
\Leftrightarrow \frac{1}{x} y=K
\Leftrightarrow y=K x
$$
