---
label: Organising Committee
description: The Organising Committee for the !!conference.year!! !!conference.full_name!! conference.

menus:
  organisation:
    title: Organising Committee
    alt: Volunteers leading the organisation and running of !!conference.full_name!! !!conference.year!!
    weight: 2
---

# Organising Committee

The following people have volunteered their time to assist in the organisation of {{ site.conference.short_name }} {{ site.conference.year }}.

{% for group in site.data.oc %}
<h2 class="mt-3">{{ group[1].label }}</h2>

{% assign num_roles_chairs = group[1]['roles'] | size %}
{% assign half_num_roles_chairs = num_roles_chairs | plus: 1  | divided_by: 2%}

<div class="row">
	<div class="col-md-6 col-12 mblast-0">
        {% for role in group[1]['roles'] offset:0 limit:half_num_roles_chairs %}
		<h3>{{ role[1].label }} <a href="{{ role[1].email }}" title="Retrieve the email address for {{ site.conference.year }} {{ role[1].label }}"><span alt="An envelope icon" class="d-inline-block icon-email ml-1"></span></a></h3>
		<ul class="list-unstyled">
			{% for people in role[1]['people'] %}
            <li class="pb-1">{{ people.name }}<br><em class="text-muted small">{{ people.institution }}, {{ people.country }}</em></li>
			{% endfor %}
		</ul>
        {% endfor %}
	</div>
	<div class="col-md-6 col-12 mblast-0">
        {% for role in group[1]['roles'] offset:half_num_roles_chairs %}
		<h3>{{ role[1].label }} <a href="{{ role[1].email }}" title="Retrieve the email address for {{ site.conference.year }} {{ role[1].label }}"><span alt="An envelope icon" class="d-inline-block icon-email ml-1"></span></a></h3>
		<ul class="list-unstyled">
			{% for people in role[1]['people'] %}
            <li class="pb-1">{{ people.name }}<br><em class="text-muted small">{{ people.institution }}, {{ people.country }}</em></li>
			{% endfor %}
		</ul>
        {% endfor %}
	</div>
</div>

{% unless forloop.last %}
<hr>
{% endunless %}

{% endfor %}