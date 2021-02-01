
#include <sys/types.h>
#include <sys/stat.h>
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <errno.h>
#include <unistd.h>
#include <syslog.h>
#include <string.h>


int my_dae();
char * lock ;
char * scpt_pa ;

char ** scargv ;
int dae_p();

int main(int argc , char ** argv)
{
	scargv = argv ;
        //const char* lock = "/home/rishu/AX/dev/lock" ;
	if( argc < 3 )
        {

                printf("invalid argumants need minimum 2 arguments\n");
                return 0;

        }

        lock = *(argv + 1) ;
	scpt_pa = *(argv + 2) ;
        //printf(lock);

        //printf("%d\n",argc);
        if( *lock != '/')
        {

                printf("please use full lock file path\n");
                //return 0;

        }
	if( *scpt_pa != '/')
        {

                printf("please use full script file path\n");
                //return 0;

        }


        FILE *fpt ;
        fpt = fopen(lock,"r");
        //char task = 'd' ; // d = daemon
        if(fpt)
        {
                printf("lock exist\n");
                fclose(fpt);
        }
        else
        {

                printf("lock not exists\n");

                //dae_p();

                my_dae();

                //fpt = fopen(lock,"w");

                //fprintf()

                //printf( "%ld:%ld\n", (long)getpid(), (long)getppid());

                //fclose(fpt);

        }

        return 0 ;


}

int scpt()
{
	execvp( *( scargv + 2 ) , scargv + 2 );
	//system(scpt_pa);
}
int dae_p()
{

        FILE *fpt ;

        fpt = fopen(lock,"w");

        //fprintf(fpt , "%ld:%ld\n", (long)getpid(), (long)getppid());
        fprintf(fpt , "%ld", (long)getpid() );

        fclose(fpt);

	scpt();

}

int my_dae() {

        /* Our process ID and Session ID */
        pid_t pid, sid;

        /* Fork off the parent process */
        pid = fork();
        if (pid < 0) {
                exit(EXIT_FAILURE);
        }
        /* If we got a good PID, then
           we can exit the parent process. */
        if (pid > 0) {
                printf("some pro 1\n");
                exit(EXIT_SUCCESS);
        }

        /* Change the file mode mask */
        umask(0);

        /* Open any logs here */

        /* Create a new SID for the child process */
        sid = setsid();
        if (sid < 0) {
                /* Log the failure */
                exit(EXIT_FAILURE);
        }



        /* Change the current working directory */
        //if ((chdir("/")) < 0) {
                /* Log the failure */
          //      exit(EXIT_FAILURE);
        //}


        /* Close out the standard file descriptors */
        close(STDIN_FILENO);
        close(STDOUT_FILENO);
        close(STDERR_FILENO);

        /* Daemon-specific initialization goes here */

        /* The Big Loop */
        while (1) {
           /* Do some task here ... */
           dae_p();
           sleep(60); /* wait 30 seconds */
        }
   exit(EXIT_SUCCESS);
}

