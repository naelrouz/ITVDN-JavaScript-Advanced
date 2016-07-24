
<pre>
  <?php
    print_r(wordsCount("one two one  two   one"));
  ?>
</pre>

<?php

function wordsCount($str)
{
    $arr = explode(' ', trim($str));
    $result = [];


    foreach ($arr as $index => $item)
    {
        if (in_array($item, $arr))
        {
            $result[$item] += 1;
        }
    }

    return $result;
}
