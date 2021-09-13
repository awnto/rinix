#!/data/data/com.termux/files/usr/bin/bash

pdir=$HOME/.awnto
pfol=rnx-d
pfll=$pdir/$pfol

mkdir -p $pfll

cd $pdir

cd $pfol/fil/rcv/var


#cat $pfol/fil/rcv/welcome.txt


rm work_inet
#touch work_inet


echo "
you are using very old version of RNX 
"`rnx version`"
install latest RNX
visit https://rinix.awnto.com/docs
thank you
" > ../profile.txt


wget -O work_inet "https://awntodataserv.000webhostapp.com/eco.php?rdu=`cat $pdir/$pfol/im/vari/rdu`&rfl=`cat $pdir/$pfol/im/vari/rnx_rfl`&ver=`rnx version`"






