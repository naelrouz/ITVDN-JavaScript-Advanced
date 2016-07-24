
<pre>
  <?php
    print_r(wordsCount("one two one  two   one"));
  ?>
</pre>

<?php

function wordsCount($str)
{
    $arr = trim(explode(' ', $str);
    $result = [];


    foreach ($arr as $index => $item)
    {
        if (in_array(trim($item), $arr))
        {
            $result[$item] += 1;
        }
    }

    return $result;
}
